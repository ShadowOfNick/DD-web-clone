import { MailingData } from '../../form-and-mail';
import { HomePageBaseProps } from './homepage-base-props';

export interface HomePageProps extends HomePageBaseProps {
  emailResponseData: MailingData;
};
