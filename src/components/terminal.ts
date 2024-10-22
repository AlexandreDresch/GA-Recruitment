import { terminalInitialization, archiveData } from "../constants";
import { TerminalProps } from "../types";
import { Component } from "./component";

export class Terminal extends Component {
  private output: string[] = [];
  private prompt: string;
  private currentCommand: string = "";
  private caretVisible: boolean = true;
  private caretInterval: ReturnType<typeof setInterval> | null = null;
  private terminalInitializationData: string[] = terminalInitialization;
  private isInputDisabled: boolean = false;

  constructor(props: TerminalProps = {}) {
    super(props);
    this.prompt = props.prompt || ">";
    this.startCaretBlinking();
    this.initializeTerminal();
  }

  async initializeTerminal(): Promise<void> {
    this.disableInput();
    for (const message of this.terminalInitializationData) {
      await this.typeOutResponse(message);
      this.output.push("");
    }
    this.enableInput();
  }

  handleInput(command: string): void {
    if (command.trim() && !this.isInputDisabled) {
      this.output.push(`${this.prompt} ${command}`);
      this.simulateCommandOutput(command);
    }
  }

  async simulateCommandOutput(command: string): Promise<void> {
    let response: string = "";
    const commandParts = command.trim().split(" ");

    switch (commandParts[0].toLowerCase()) {
      case "help":
        response =
          "Available commands: help, clear, about, list, detail [title]";
        break;
      case "clear":
        this.output = [];
        this.updateCurrentOutput();
        return;
      case "about":
        response =
          "The Netsphere refers to the hyper-evolved version of the Internet in the universe of BLAME!. First coming online before the City's construction, untold tens of thousands of years ago, the Netsphere was created by humans to solve all worldly problems.";
        break;
      case "list":
        response = this.listArchiveItems();
        break;
      case "detail":
        if (commandParts.length > 1) {
          const title = commandParts.slice(1).join(" ");
          response = this.getDossierDetails(title);
        } else {
          response = "Usage: detail [title]";
        }
        break;
      default:
        response = `Command '${command}' not recognized. Try 'help'.`;
    }
    await this.typeOutResponse(response);
  }

  getDossierDetails(title: string): string {
    const dossier = archiveData.archiveItems.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );

    if (dossier) {
      return `
          Title: ${dossier.title}<br>
          Description: ${dossier.description}<br>
          Access Level: ${dossier.accessLevel}<br>
          Status: ${dossier.status}<br>
          Date: ${dossier.date}
        `;
    } else {
      return `Dossier titled '${title}' not found.`;
    }
  }

  listArchiveItems(): string {
    return archiveData.archiveItems.map((item) => item.title).join("<br>");
  }

  async typeOutResponse(response: string): Promise<void> {
    this.currentCommand = "";
    this.caretVisible = true;
    this.updateCurrentOutput();

    for (const char of response) {
      this.currentCommand += char;
      this.updateCurrentOutput();
      await this.delay(50);
    }

    if (response) {
      this.output.push(this.currentCommand);
    }
    this.currentCommand = "";
    this.updateCurrentOutput();
    this.stopCaretBlinking();
  }

  updateCurrentOutput(): void {
    const terminalOutput = document.getElementById("terminal-output");

    if (terminalOutput) {
      terminalOutput.innerHTML = [...this.output, this.currentCommand].join(
        "<br>"
      );

      if (this.caretVisible) {
        terminalOutput.innerHTML += `<span class="caret">|</span>`;
      }

      requestAnimationFrame(() => {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      });
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  handleKeyDown(event: KeyboardEvent, inputElement: HTMLInputElement): void {
    if (event.key === "Enter") {
      this.handleInput(inputElement.value);
      inputElement.value = "";
    }
  }

  startCaretBlinking(): void {
    this.caretInterval = setInterval(() => {
      this.caretVisible = !this.caretVisible;
      this.updateCurrentOutput();
    }, 500);
  }

  stopCaretBlinking(): void {
    if (this.caretInterval) {
      clearInterval(this.caretInterval);
    }
    this.caretVisible = false;
    this.updateCurrentOutput();
  }

  disableInput(): void {
    this.isInputDisabled = true;
    const inputElement = document.getElementById(
      "terminal-input"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.disabled = true;
    }
  }

  enableInput(): void {
    this.isInputDisabled = false;
    const inputElement = document.getElementById(
      "terminal-input"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.disabled = false;
    }
  }

  render(): string {
    return `
      <div class="terminal crt" role="region" aria-live="polite" aria-label="Terminal window displaying commands and responses">
        <div id="terminal-output" class="terminal-output" aria-live="assertive" aria-atomic="true">${this.output.join(
          "<br>"
        )}</div>
        <div class="terminal-input">
          <label for="terminal-input" class="sr-only">Type your command</label>
          <span>${this.prompt}</span>
          <input id="terminal-input" type="text" ${
            this.isInputDisabled ? "disabled" : ""
          } aria-label="Command input, type your command here" />
        </div>
      </div>
    `;
  }

  mount(target: HTMLElement): void {
    super.mount(target);
    const inputElement = document.getElementById(
      "terminal-input"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.addEventListener("keydown", (event) =>
        this.handleKeyDown(event, inputElement)
      );
    }
  }
}
