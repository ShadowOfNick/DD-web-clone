import React from 'react';
import { DigitalAuditCard } from './digital-audit-card';
import { DigitalAuditInfoCards } from '../../services';

interface DigitalAuditCardsProps {
  digitalAuditCardData: DigitalAuditInfoCards[];
};

export const DigitalAuditCards: React.FC<DigitalAuditCardsProps> = ({
  digitalAuditCardData,
}) => (
  <div className="digital-audit-cards">
    {digitalAuditCardData?.map((item, index) => (
      <DigitalAuditCard
        key={index}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
);
  