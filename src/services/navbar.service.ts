import { createClient } from 'contentful';
import {
  ContentfulNavbarItems,
  NavbarItemFields,
  mapNavbar,
} from './navbar';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY || '',
});

export const getNavbarData = async (): Promise<NavbarItemFields[]> => {
  const navbar = (await client.getEntries<ContentfulNavbarItems>({ content_type: 'navbar', locale: 'cs-CZ' })).items[0];
  return mapNavbar(navbar);
};
