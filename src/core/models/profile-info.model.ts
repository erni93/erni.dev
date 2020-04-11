import { TextSection, ProjectsSection } from './section.model';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

export interface ProfileInfo {
  photoUrl: string;
  name: string;
  socialMedias: SocialMedia[];
  aboutMeSection: TextSection;
  projectsSection: ProjectsSection;
}

interface SocialMedia {
  name: string;
  href: string;
  icon: IconLookup;
}
