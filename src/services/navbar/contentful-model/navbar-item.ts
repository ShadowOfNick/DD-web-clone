import { Entry } from 'contentful';

export interface ContentfulNavbarItem {
  title: string;
  id?: string;
  link?: string;
};

export interface ContentfulNavbarItemEntry extends Entry<ContentfulNavbarItem> {};
