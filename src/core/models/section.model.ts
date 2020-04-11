import { IconLookup } from '@fortawesome/fontawesome-common-types';

export interface Section {
  title: string;
  icon: IconLookup;
}

export interface TextSection extends Section {
  content: string;
}

export interface ProjectsSection extends Section {
  projects: Project[];
}

interface Project {
  imgUrl: string;
  title: string;
  languages: Language[];
  description: string;
  href: string;
}

interface Language {
  name: string;
  iconUrl: string;
}
