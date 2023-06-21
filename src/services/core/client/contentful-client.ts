import getConfig from 'next/config';
import { ContentfulClientApi, createClient } from 'contentful';

let client: ContentfulClientApi | null = null;
const { serverRuntimeConfig } = getConfig();

export const getDeliveryClient = () => {
  if (!client) {
    client = createClient({
      space: serverRuntimeConfig.contentfulSpaceId || '',
      accessToken: serverRuntimeConfig.contentfulAccessToken || '',
    });
  }

  return client;
};
