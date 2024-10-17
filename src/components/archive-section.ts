import { Component } from "./component";
import { ArchiveProps } from "../types";
import { Terminal } from "./terminal";

export class ArchiveSection extends Component {
  private terminalInitialized: boolean = false;

  constructor(props: ArchiveProps) {
    super(props);
  }

  render(): string {
    return /*html*/ `
      <section id="archive" >
        <h2 class="section-title" data-text="ARCHIVE">Archive</h2>

        <p class="overview">
          Classified information stored for operatives’ review. Access is restricted based on clearance levels. Dossiers on terminated agents, anomalies within the city, and past operations can be found here.
        </p>

        <div id="terminal-container"></div>
      </section>
    `;
  }

  mount(target: HTMLElement): void {
    super.mount(target);

    const archiveSection = document.getElementById("archive");

    if (archiveSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.terminalInitialized) {
              this.initializeTerminal();
              this.terminalInitialized = true;
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

      observer.observe(archiveSection);
    }
  }

  initializeTerminal(): void {
    const terminalContainer = document.getElementById("terminal-container");
    if (terminalContainer) {
      const terminal = new Terminal();
      terminal.mount(terminalContainer);
    }
  }
}
