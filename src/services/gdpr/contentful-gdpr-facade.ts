import { ContentfulClientApi } from 'contentful';
import { getDeliveryClient } from '../core';
import { ContentfulGDPRPageData } from './contentful-model';
import { GDPRFacadeInterface } from './gdpr-facade';
import { mapGDPRPageData } from './mapper';
import { GDPRPageData } from './model';

// export class ContentfulGDPRFacade implements GDPRFacadeInterface {
//   constructor(
//     private readonly client: ContentfulClientApi,
//   ) { }

  export const getGDPRPageData = async (locale: string): Promise<GDPRPageData> => {
    const data = (await getDeliveryClient().getEntries<ContentfulGDPRPageData>({
      content_type: 'gdprPage',
      locale,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapGDPRPageData(data);
  };
// };
