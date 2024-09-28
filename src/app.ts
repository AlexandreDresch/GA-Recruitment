import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

const app = document.getElementById("app") as HTMLElement;

const headerComponent = new Header();
const mainSectionComponent = new MainSection();
const testimonialsComponent = new Testimonials({
  testimonials: [
    { quote: "Amazing service!", author: "John Doe" },
    { quote: "Really boosted my business.", author: "Jane Smith" },
  ],
});
const footerComponent = new Footer();

headerComponent.mount(app);
mainSectionComponent.mount(app);
testimonialsComponent.mount(app);
footerComponent.mount(app);
