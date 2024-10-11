import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";
import { SystemSection } from "./components/system-section";

import { hierarchy, controlAreas } from "./constants";

const app = document.getElementById("app") as HTMLElement;

const headerComponent = new Header();
const mainSectionComponent = new MainSection();
const systemSectionComponent = new SystemSection({ hierarchy, controlAreas });
const testimonialsComponent = new Testimonials({
  testimonials: [
    { quote: "Amazing service!", author: "John Doe" },
    { quote: "Really boosted my business.", author: "Jane Smith" },
  ],
});
const footerComponent = new Footer();

headerComponent.mount(app);
mainSectionComponent.mount(app);
systemSectionComponent.mount(app);
testimonialsComponent.mount(app);
footerComponent.mount(app);
