import { TextSection, ProjectSection } from './section.model';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

export interface ProfileInfo {
  photoUrl: string;
  name: string;
  socialMedias: SocialMedia[];
  textSections: TextSection[];
  projectSections: ProjectSection[];
}

interface SocialMedia {
  name: string;
  href: string;
  icon: IconLookup;
}
