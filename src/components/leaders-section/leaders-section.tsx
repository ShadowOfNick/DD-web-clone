import React from 'react';
import { CardLeader } from './card-leader';
import { LeadersSectionFields} from '../../services';

export const LeadersSection: React.FC<LeadersSectionFields> = ({
  title,
  description,
  leadersData,
}) => (
  <div className="leaders-section">
    <h2 className="leaders-section__title" data-testid="leaders-section-title">
      {title}
    </h2>

    <p className="leaders-section__description" data-testid="leaders-section-description">
      {description}
    </p>

    <div className="leaders-section__leader-card">
      {leadersData.map((item, index) => (
        <CardLeader
          key={index}
          name={item.name}
          position={item.position}
          image={item.image}
          phone={item.phone}
          email={item.email}
          emailRequest={item.emailRequest}
        />
      ))}
    </div>
  </div>
);
