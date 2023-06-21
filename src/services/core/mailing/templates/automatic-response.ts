interface EmailTemplateData {
  subject: string;
  title: string;
  greeting: string;
  acknowledgements: string;
  assurance: string;
  contact: {
    text: string;
    textLink: string;
    link: string;
  },
  farewell: string;
  notToReply: string;
};

const TEXTS: Record<string, EmailTemplateData> = {
  'cs-CZ': {
    subject: 'Automatická odpověď',
    title: 'Vaše zpráva k nám v pořádku dorazila. Děkujeme.',
    greeting: 'Zdravíme vás!',
    acknowledgements: 'Děkujeme, moc nás těší, že jste nám napsali.',
    assurance: 'Vaše zpráva k nám v pořádku dorazila, budeme se jí věnovat, co nejdříve to půjde.',
    contact: {
      text: 'A pokud si vzpomenete ještě na něco dalšího, určitě nám opět napište prostědnictvím našeho ',
      textLink: 'kontaktního formuláře',
      link: 'https://www.deloitte-digital.cz/#contact',
    },
    farewell: 'Krásný den a brzy se ozveme',
    notToReply: 'Tato zpráva byla vygenerována automaticky, neodpovídejte na ni',
  },
  'en-US': {
    subject: 'Automatic response',
    title: 'Your message has reached us successfully. Thank you.',
    greeting: 'Greetings!',
    acknowledgements: 'Thank you, we are very pleased to hear from you.',
    assurance: 'Your message has reached us successfully; we will attend to it as soon as we can.',
    contact: {
      text: 'If you can think of anything else, be sure to let us know again via our ',
      textLink: 'contact form',
      link: 'https://www.deloitte-digital.cz/en-US#contact',
    },
    farewell: 'Have a nice day and we will be in touch soon',
    notToReply: 'This message was generated automatically, do not reply to it',
  },
};

export const EMAIL_LANGUAGES = Object.keys(TEXTS);

export const getEmailSubject = (language: string) => TEXTS[language].subject;

export const getAutomaticResponseEmail = (
  language: string,
) => {
  const textation = TEXTS[language];

  return (`
      <html lang="${language}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
        <noscript>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
        <![endif]-->
        <style>
          .contact-link {color: #86BC25; text-decoration: none;}
          .contact-link:hover {color: #A0DCFF; text-decoration: underline}
        </style>
      </head>
      <body style="margin:0;padding:0;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; background:#ffffff;">
          <tr>
            <td align="center" style="background-color: #E3E48D;padding: 0 20px; font-family: 'Open Sans', sans-serif;">
              <table role="presentation" style="max-width:520px;border-collapse:collapse;border:0;">
                <tr>
                  <td height="40">&nbsp;</td>
                </tr>
                <tr>
                  <td align="left">
                    <h1>
                      ${textation.title}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td height="40">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 0 20px; font-family: 'Open Sans', sans-serif;">
              <table role="presentation" style="max-width: 520px; border-collapse: collapse; text-align: left;">
                <tr>
                  <td height="60">&nbsp;</td>
                </tr>
                <tr>
                  <td align="left">
                    <h2 style="font-size: 16px; line-height: 22px; margin: 0 0 16px 0; font-weight: 600; color: #000000;">
                      ${textation.greeting}
                    </h2>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-weight: 400; color: #000000;">
                      ${textation.acknowledgements}
                    </p>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-weight: 400; color: #000000;">
                      ${textation.assurance}
                    </p>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-weight: 400; color: #000000;">${textation.contact.text} <a href="${textation.contact.link}" class="contact-link">${textation.contact.textLink}</a>.</p>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-weight: 400; color: #000000;">${textation.farewell}.</p>
                  </td>
                </tr>
                <tr>
                  <td height="20">&nbsp;</td>
                </tr>
                <tr>
                  <td><img src="dd-logo-black 1.png" height="33" width="73" /></td>
                </tr>
                <tr>
                  <td height="40">&nbsp;</td>
                </tr>
                <tr>
                  <td align="left" style="font-size: 10px; color: #000000;">
                    <p>${textation.notToReply}.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="100">&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
  `);
};
