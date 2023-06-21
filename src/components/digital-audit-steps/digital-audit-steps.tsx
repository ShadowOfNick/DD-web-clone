import React from 'react';

interface DigitalAuditStepsProps {
  digitalAuditStepTitle: string | null;
  digitalAuditStep: string[];
};

export const DigitalAuditSteps: React.FC<DigitalAuditStepsProps> = ({
  digitalAuditStepTitle,
  digitalAuditStep,
}) => (
  <div className="digital-audit-steps">

    {digitalAuditStepTitle && (
      <h3 className="digital-audit-steps__title">
        {digitalAuditStepTitle}
      </h3>
    )}

    {digitalAuditStep?.map((item, index) => (
      <div className="digital-audit-steps__step" key={index}>
        <div className="digital-audit-steps__step__number">
          {index + 1}
        </div>
        <p className="digital-audit-steps__step__text">
          {item}
        </p>
      </div>
    ))}
  </div>
);
  