import { ContentfulClientApi } from 'contentful';
import { ContentfulNavbarItems } from './contentful-model';
import { mapNavbar } from './mapper';
import { NavbarItemFields } from './model';
import { NavbarFacadeInterface } from './navbar-facade';

export class ContentfulNavbarFacade implements NavbarFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getNavbarData = async (locale: string): Promise<NavbarItemFields[]> => {
    const data = (await this.client.getEntries<ContentfulNavbarItems>({
      content_type: 'navbar',
      locale
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapNavbar(data);
  };
};
