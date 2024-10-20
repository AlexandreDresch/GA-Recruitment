import { Component } from "./component";

export class Footer extends Component {
  render(): string {
    return /*html*/`
      <footer footer aria-label="Footer">
      <nav aria-label="Footer Navigation">
        <p>USE THE NUMBERS TO SWITCH SECTIONS</p>
        <ul>
          <li>
            <a
              href="/"
              class="glitch-button small-glitch-button"
              aria-label="Go to Home page"
              data-text="00"
              accesskey="0"
              >00</a
            >
          </li>
          <li>
            <a
              href="#system" 
              data-text="01"
              class="glitch-button small-glitch-button"
              aria-label="Go to The System section"
              accesskey="1"
              >01</a
            >
          </li>
          <li>
            <a
              href="#archive" 
              data-text="02"
              class="glitch-button small-glitch-button"
              aria-label="Go to Archive section"
              accesskey="2"
              >02</a
            >
          </li>
          <li>
            <a
              href="#operatives" 
              data-text="03"
              class="glitch-button small-glitch-button"
              aria-label="Go to Operatives section"
              accesskey="3"
              >03</a
            >
          </li>
          <li>
            <a
              href="#join-us" 
              data-text="04"
              class="glitch-button small-glitch-button"
              aria-label="Go to Join section"
              accesskey="4"
              >04</a
            >
          </li>
          <li>
            <a
              href="#blame-section" 
              data-text="05"
              class="glitch-button small-glitch-button"
              aria-label="Go to Blame section"
              accesskey="5"
              >05</a
            >
          </li>
        </ul>
      </nav>

      <div>
        <p>&copy; 2024 T.C.A</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
    `;
  }
}
