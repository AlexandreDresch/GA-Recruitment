import { Component } from "./component";

interface HeaderProps {
  title?: string;
}

export class Header extends Component {
  constructor(props: HeaderProps) {
    super(props);
  }

  render(): string {
    return `
      <header>
        <h1>${this.props.title || "Welcome to Our Website"}</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
