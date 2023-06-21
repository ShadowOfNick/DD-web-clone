import { createClient } from 'contentful';
import { ContentfulHomePageFields, mapHomePage, HomePageFields } from './homepage';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY || '',
});

export const getHomePageData = async (): Promise<HomePageFields> => {
  const homePageData = (await client.getEntries<ContentfulHomePageFields>({ content_type: 'homePage', locale: 'cs-CZ', include: 2 })).items[0];
  return mapHomePage(homePageData);
};
