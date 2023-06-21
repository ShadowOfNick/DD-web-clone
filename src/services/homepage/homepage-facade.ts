import { HomePageFields } from './model';

export interface HomepageFacadeInterface {
  getHomepagePageData: (locale: string) => Promise<HomePageFields>;
};
