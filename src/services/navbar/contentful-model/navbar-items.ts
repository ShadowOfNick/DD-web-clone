import { Entry } from 'contentful';
import { ContentfulNavbarItemEntry } from './navbar-item';

export interface ContentfulNavbarItems {
  navbarItem: ContentfulNavbarItemEntry[];
};

export interface ContentfulNavbarItemsEntry extends Entry<ContentfulNavbarItems> {};
