import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Footer } from "./components/footer";
import { SystemSection } from "./components/system-section";
import { ArchiveSection } from "./components/archive-section";

import { hierarchy, controlAreas, archiveData } from "./constants";

const app = document.getElementById("app") as HTMLElement;

const headerComponent = new Header();
const mainSectionComponent = new MainSection();
const systemSectionComponent = new SystemSection({ hierarchy, controlAreas });
const archiveSectionComponent = new ArchiveSection(archiveData);

const footerComponent = new Footer();

headerComponent.mount(app);
mainSectionComponent.mount(app);
systemSectionComponent.mount(app);
archiveSectionComponent.mount(app);
footerComponent.mount(app);
