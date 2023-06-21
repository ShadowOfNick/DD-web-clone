import { ContentfulLinksFieldEntry } from '../contentful-model';
import { LinksField } from '../model';

export const mapFooterLinks = (items: ContentfulLinksFieldEntry[]): LinksField[] => items.map((link) => ({
  link: link.fields.link,
  title: link.fields.title,
}));
