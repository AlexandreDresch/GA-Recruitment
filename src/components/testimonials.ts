import { Component } from "./component";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export class Testimonials extends Component {
  constructor(props: TestimonialsProps) {
    super(props);
  }

  render(): string {
    return `
      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        <div class="testimonials-list">
          ${this.props.testimonials
            .map(
              (testimonial: Testimonial) => `
            <blockquote>
              <p>"${testimonial.quote}"</p>
              <footer>- ${testimonial.author}</footer>
            </blockquote>
          `
            )
            .join("")}
        </div>
      </section>
    `;
  }
}
