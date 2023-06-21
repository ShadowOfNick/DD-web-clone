import { ContactFormServerData, FormContactData } from '../../form-and-mail';
import { HomePageBaseProps } from './homepage-base-props';

export interface HomePageLayoutProps extends HomePageBaseProps {
  contactFormServerData: ContactFormServerData | null;
  sendingInProgress: boolean;
  submitContactForm: (data: FormContactData) => void;
};
