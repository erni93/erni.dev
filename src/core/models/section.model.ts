import { IconLookup } from '@fortawesome/fontawesome-common-types';

export interface Section {
  title: string;
  icon: IconLookup;
}

export interface TextSection extends Section {
  content: string;
}

export interface ProjectSection extends Section {
  projects: Project[];
}

interface Project {
  imgUrl: string;
  title: string;
  Languages: Language[];
  description: string;
  href: string;
}

interface Language {
  name: string;
  iconUrl: string;
}
