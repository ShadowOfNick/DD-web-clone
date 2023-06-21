import { Document } from '@contentful/rich-text-types';
import { GalleryItem } from '../domain/gallery-item';
import { ScheduleProps } from './schedule';

export interface EventPageDataProps {
  bodyImage: Document;
  contentBottom: Document;
  contentTop: Document;
  galleryItems: GalleryItem[];
  galleryTitle: string;
  mainImage: string;
  title: string;
  subtitle: string | null;
  schedule: ScheduleProps | null;
  gallery: Document | null;
  linkForRegistration: string | null;
};
