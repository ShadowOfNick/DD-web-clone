import React from 'react';
import { FocusSectionFields } from '../../services';
import { Card } from './card';

export const FocusSection: React.FC<FocusSectionFields> = ({
  title,
  description,
  focusCards,
}) => (
  <div className="cards-section">
    <h2 className="cards-section__title">
      {title}
    </h2>

    {description && 
      <p className="cards-section__description">
        {description}
      </p>
    }

    <div className="cards-section__cards">
      {focusCards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          shortDescriptionItem={item.shortDescriptionItem}
          iconUrl={item.iconUrl}
        />
      ))}
    </div>
  </div>
);
