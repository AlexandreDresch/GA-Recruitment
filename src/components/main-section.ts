import { Component } from "./component";

interface MainSectionProps {
  subtitle?: string;
  description?: string;
  ctaText?: string;
}

export class MainSection extends Component {
  constructor(props: MainSectionProps) {
    super(props);
  }

  render(): string {
    return `
      <section id="main">
        <h2>${this.props.subtitle || "Discover Our Amazing Product"}</h2>
        <p>${
          this.props.description ||
          "We offer the best solution for your business needs."
        }</p>
        <button>${this.props.ctaText || "Get Started"}</button>
      </section>
    `;
  }
}
