import { Entry } from 'contentful';
import { ContentfulLinksFieldEntry } from './footer-links';

export interface ContentfulFooter {
  footerText: string;
  iconList: string[];
  links: ContentfulLinksFieldEntry[];
  slogan: string;
};

export interface ContentfulFooterEntry extends Entry<ContentfulFooter> {};
