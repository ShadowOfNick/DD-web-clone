import { EventPageDataProps } from './model';

export interface EventFacadeInterface {
  getEventPageData: (locale: string) => Promise<EventPageDataProps>;
};
