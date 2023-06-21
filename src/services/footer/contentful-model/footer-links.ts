import { Entry } from 'contentful';

export interface ContentfulLinksField {
  title: string;
  link: string;
};

export interface ContentfulLinksFieldEntry extends Entry<ContentfulLinksField> {};
