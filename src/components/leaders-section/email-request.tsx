import React from 'react';
import { EmailRequestComponentProps } from '../../services';

export const EmailRequest: React.FC<EmailRequestComponentProps> = ({
  subject,
  emailTo,
  emailCc,
  children,
}) => (
  <a
    className="card-leader__contact"
    href={`mailto:${emailTo}?cc=${emailCc}&subject=${subject}`}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);
