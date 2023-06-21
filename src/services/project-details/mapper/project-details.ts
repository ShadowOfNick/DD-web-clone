import { mapImageAssetSrc } from '../../core';
import { ContentfulProjectDetailEntry } from '../contentful-model';
import { ProjectDetail } from '../model';

export const mapProjectDetailPage = (item: ContentfulProjectDetailEntry): ProjectDetail  => ({
  title: item.fields.title,
  subtitle: item.fields.subtitle,
  slug: item.fields.slug,
  projectLead: item.fields.projectLead,
  projectDescription: item.fields.projectDescription,
  relatedArticlesTitle: item.fields.relatedArticlesTitle,
  imageUrl: mapImageAssetSrc(item.fields.image, {
    requestedWidth: 640,
    format: 'webp',
  }),
  imageTitle: item.fields.image.fields.title,
});
