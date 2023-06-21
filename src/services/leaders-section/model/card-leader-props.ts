import { EmailRequestProps } from './email-request-props';

export interface CardLeaderProps {
  name: string;
  position: string;
  image: string;
  phone: string | null;
  email: string | null;
  emailRequest: EmailRequestProps | null;
};
