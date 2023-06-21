import { ContentfulClientApi } from 'contentful';
import { ContentfulMktCampaignDataProps } from './contentful-model';
import { mapMktCampaing23 } from './mapper';
import { MktCampaign23FacadeInterface } from './mkt-campaign-23-facade';
import { MktCampaignDataProps } from './model';

export class ContentfulMktCampaign23Facade implements MktCampaign23FacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getMktCampaign23PageData = async (locale: string): Promise<MktCampaignDataProps> => {
    const data = (await this.client.getEntries<ContentfulMktCampaignDataProps>({
      content_type: 'mktCampaign2023',
      locale,
      include: 4,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapMktCampaing23(data);
  };
};
