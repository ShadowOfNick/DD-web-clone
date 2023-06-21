import { NextApiRequest, NextApiResponse } from 'next';
import {
  FormContactData,
  getAutomaticResponseEmail,
  getEmailSubject,
  MailingData,
  sendMail,
} from '../../services';

interface ContactAndMailingData {
  contactData: FormContactData;
  mailData: MailingData;
};

const sendEmailTo = async (data: ContactAndMailingData, language: string) => {
  const htmlContent = `
    <ul>
      <li>Company: ${data.contactData.company}</li>
      <li>Email: ${data.contactData.email}</li>
      <li>Name: ${data.contactData.name}</li>
      <li>Phone: ${data.contactData.phone}</li>
      <li>Message: ${data.contactData.message}</li>
    </ul>
  `;

  await sendMail(
    getEmailSubject(language),
    data.contactData.email,
    data.mailData.recipient,
    htmlContent,
    getAutomaticResponseEmail(language),
  );
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { language } = query;
  const languageCode = Array.isArray(language) ? language[0] : (language || 'cs-CZ');

  if (req.method === 'POST') {
    sendEmailTo(req.body, languageCode);
    res.status(200).json(req.body);
  } else {
    res.status(405).end('Method not allowed');
  };
};

export default handler;
