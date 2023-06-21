import { ContentfulFooterEntry } from '../contentful-model';
import { FooterData } from '../model';
import { mapFooterLinks } from './footer-links';

export const mapFooter = (items: ContentfulFooterEntry): FooterData => ({
  footerText: items.fields.footerText,
  iconList: items.fields.iconList,
  links: mapFooterLinks(items.fields.links),
  slogan: items.fields.slogan,
});
