import React from 'react';
import { InfoSectionFields } from '../../services';

export const InfoSection: React.FC<InfoSectionFields> = ({
  title,
  description,
  quote = null
}) => (
  <div className="info-section">
    <h2 className="info-section__title">
      {title}
    </h2>
    <p className="info-section__description">
      {description}
    </p>
    {quote && (
      <p className="info-section__quote">
        {quote}
      </p>
    )}
  </div>
);
