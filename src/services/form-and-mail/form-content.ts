export interface FormContactData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export interface MailingData {
  recipient: string;
  sender: string;
  replyTo: string;
  subject: string;
  automaticResponse: string;
};

export interface ContactFormServerData {
  success: boolean;
  messageTitle: string;
  messageText: string;
};
