import { Asset, Entry } from 'contentful';

export interface ContentfulCarouselSlides {
  title: string; 
  description?: string;
  link: string; 
  image: Asset; 
};

export interface ContentfulCarouselSlidesEntry extends Entry<ContentfulCarouselSlides> {};
