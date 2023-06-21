import { ContentfulNavbarItemsEntry } from '../contentful-model';
import { NavbarItemFields } from '../model';

export const mapNavbar = (items: ContentfulNavbarItemsEntry): NavbarItemFields[] => items.fields.navbarItem.map((item) => ({
  title: item.fields.title,
  id: item.fields.id || null,
  link: item.fields.link || null,
}));
