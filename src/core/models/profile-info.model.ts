import { TextSection, ProjectsSection } from './section.model';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
import { SeoConfig } from './seo-config.model';

export interface ProfileInfo {
  photoUrl: string;
  name: string;
  socialMedias: SocialMedia[];
  aboutMeSection: TextSection;
  projectsSection: ProjectsSection;
  seoConfig: SeoConfig;
}

interface SocialMedia {
  name: string;
  href: string;
  icon: IconLookup;
}
