import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Footer } from "./components/footer";
import { SystemSection } from "./components/system-section";
import { ArchiveSection } from "./components/archive-section";
import { OperativesSection } from "./components/operatives-section";

import {
  hierarchy,
  controlAreas,
  archiveData,
  operativesData,
} from "./constants";

const app = document.getElementById("app") as HTMLElement;

const headerComponent = new Header();
const mainSectionComponent = new MainSection();
const systemSectionComponent = new SystemSection({ hierarchy, controlAreas });
const archiveSectionComponent = new ArchiveSection(archiveData);
const operativesComponent = new OperativesSection({
  operatives: operativesData,
});

const footerComponent = new Footer();

headerComponent.mount(app);
mainSectionComponent.mount(app);
systemSectionComponent.mount(app);
archiveSectionComponent.mount(app);
operativesComponent.mount(app);
footerComponent.mount(app);
