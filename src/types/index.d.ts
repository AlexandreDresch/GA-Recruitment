export interface ComponentProps {
  [key: string]: any;
}

export interface ControlArea {
  title: string;
  description: string;
}

export interface HierarchyItem {
  title: string;
  purpose: string;
  accessLevel: string;
}

export interface TheSystemProps {
  hierarchy: HierarchyItem[];
  controlAreas: ControlArea[];
}

export interface ArchiveItem {
  title: string;
  description: string;
  accessLevel: string;
}

export interface ArchiveProps {
  archiveItems: ArchiveItem[];
}

export interface Operative {
  name: string;
  description: string;
  image: string;
  accessLevel: string;
}

export interface OperativesProps {
  operatives: Operative[];
}

interface BlameSectionProps {
  title: string;
}

export interface TerminalProps extends ComponentProps {
  prompt?: string;
}
