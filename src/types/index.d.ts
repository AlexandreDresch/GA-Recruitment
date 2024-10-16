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
