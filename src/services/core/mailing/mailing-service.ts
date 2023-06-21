import nodemailer from 'nodemailer';
import getConfig from 'next/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';

export const sendMail = async (
  subject: string,
  sender: string,
  recipient: string,
  content: string,
  automaticResponse: string,
) => {
  const { serverRuntimeConfig } = getConfig();
  const {
    smtpHost,
    smtpPort,
    smtpSecure,
    smtpUser,
    smtpPassword,
    emailSender,
    emailReplyTo,
  } = serverRuntimeConfig;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  await sendEmailSync(transporter, {
    from: emailSender,
    replyTo: emailReplyTo,
    to: recipient,
    subject: 'DD web: client question',
    html: content,
  });
  await sendEmailSync(transporter, {
    from: emailSender,
    replyTo: emailReplyTo,
    to: sender,
    subject: subject,
    html: automaticResponse,
  });
};

const sendEmailSync = (
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>,
  option: Mail.Options,
) => new Promise<void>((resolve, rejects) => {
  transporter.sendMail(option, (error) => {
    if (error) {
      rejects(error);
      return;
    };
    resolve();
    return;
  });
});
