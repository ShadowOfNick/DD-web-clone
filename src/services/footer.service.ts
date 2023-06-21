import { createClient } from 'contentful';
import { ContentfulFooter } from './footer/contentful-model';
import { FooterData, mapFooter } from './footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY || '',
});

export const getFooterData = async (): Promise<FooterData> => {
  const footer = (await client.getEntries<ContentfulFooter>({ content_type: 'footer', locale: 'cs-CZ' })).items[0];
  return mapFooter(footer);
};