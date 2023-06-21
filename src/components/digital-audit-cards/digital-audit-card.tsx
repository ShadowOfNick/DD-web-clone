import React from 'react';
import { DigitalAuditInfoCards } from '../../services';
import { RichTextContent } from '../rich-text-content';

export const DigitalAuditCard: React.FC<DigitalAuditInfoCards> = ({
  title,
  description,
}) => (
  <div className="digital-audit-card">
    <h2 className="digital-audit-card__title">
      {title}
    </h2>

    <RichTextContent content={description} />
  </div>
);
