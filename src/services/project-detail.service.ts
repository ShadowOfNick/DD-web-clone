import { createClient } from 'contentful';
import { ContentfulProjectDetail, mapProjectDetail, ProjectDetail } from './project-details';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY || '',
});

export const getProjectDetailData = async (): Promise<ProjectDetail[]> => {
  const projectDetailPageData = (await client.getEntries<ContentfulProjectDetail>({ content_type: 'projectDetailPage', locale: 'cs-CZ' })).items;
  return mapProjectDetail(projectDetailPageData);
};
