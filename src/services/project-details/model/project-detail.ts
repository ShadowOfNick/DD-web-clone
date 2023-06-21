import { Document } from '@contentful/rich-text-types';

export interface ProjectDetail {
  title: string;
  subtitle: string;
  slug: string;
  projectLead: string;
  projectDescription: Document;
  relatedArticlesTitle: string;
  imageUrl: string;
  imageTitle: string;
};
