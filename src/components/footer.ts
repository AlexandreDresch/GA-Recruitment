import { Component } from "./component";

export class Footer extends Component {
  render(): string {
    return `
      <footer>
        <p>&copy; ${new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    `;
  }
}
