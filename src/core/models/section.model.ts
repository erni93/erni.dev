interface Section {
  title: string;
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
  languajes: Languaje[];
  description: string;
  href: string;
}

interface Languaje {
  name: string;
  iconUrl: string;
}
