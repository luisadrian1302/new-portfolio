export type Language = 'es' | 'en';
export type Localized<T = string> = Record<Language, T>;
export type ProjectCategory = 'web' | 'mobile';

export interface ProjectImage {
  src: string;
  alt: Localized;
  device: 'desktop' | 'mobile';
}

export interface ProjectCopy {
  title: string;
  description: string;
  modalContent: {
    overview: string;
    disclaimer?: string;
    mainFeatures: string[];
    participation: string[];
  };
}

export interface Project {
  id: string;
  name: string;
  categories: ProjectCategory[];
  field: Localized;
  summary: Localized;
  technologies: string[];
  images: ProjectImage[];
  links: { label: Localized; href: string }[];
  status?: Localized;
  video?: string;
  content: Localized<ProjectCopy>;
}
