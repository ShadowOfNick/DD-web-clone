import { ContentfulClientApi } from 'contentful';
import { ContentfulDigitalAudit } from './contentful-model';
import { DigitalAuditFacadeInterface } from './digital-audit-facade';
import { mapDigitalAudit } from './mapper';
import { DigitalAuditData } from './model';

export class ContentfulDigitalAuditFacade implements DigitalAuditFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getDigitalAuditPageData = async (locale: string, slug: string ): Promise<DigitalAuditData> => {
    const data = (await this.client.getEntries<ContentfulDigitalAudit>({
      content_type: 'digitalAuditPage',
      'fields.slug': slug,
      locale,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapDigitalAudit(data);
  };
};
