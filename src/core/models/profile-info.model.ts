import { TextSection, ProjectSection } from './section.model';

export interface ProfileInfo {
  photoUrl: string;
  name: string;
  socialMedias: SocialMedia[];
  textSections: TextSection[];
  projectSections: ProjectSection[];
}

interface SocialMedia {
  name: string;
  imgUrl: string;
  href: string;
}
