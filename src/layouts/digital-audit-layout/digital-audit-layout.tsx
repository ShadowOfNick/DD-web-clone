import React from 'react';
import {
  HeroBanner,
  DigitalAuditCards,
  RichTextContent,
  DigitalAuditSteps,
  BackgroundSwinger,
} from '../../components';
import { DigitalAuditPageProps } from '../../services';
import { GlobalLayout } from '../global-layout';

export const DigitalAuditLayout: React.FC<DigitalAuditPageProps> = ({
  digitalAuditPage,
  navbar,
  footer,
}) => (
  <BackgroundSwinger
    className="digital-audit-layout"
    initialColor={{
      red: 160,
      green: 220,
      blue: 255,
    }}
  >
    <GlobalLayout
      pageTitle={digitalAuditPage.title}
      navbarItems={navbar}
      footer={footer}
    >
      <HeroBanner
        title={digitalAuditPage.title}
        subtitle={digitalAuditPage.description}
        image={digitalAuditPage.mainImage}
      />

      <div className="digital-audit-layout__text-content__top">
        <RichTextContent
          content={digitalAuditPage.contentTop}
        />
      </div>

      {digitalAuditPage.infoCards && (
        <DigitalAuditCards
          digitalAuditCardData={digitalAuditPage.infoCards.map(item => ({
            title: item.title,
            description: item.description,
          }))}
        />
      )}

      <DigitalAuditSteps
        digitalAuditStepTitle={digitalAuditPage.sixStepsTitle}
        digitalAuditStep={digitalAuditPage.sixSteps}
      />

      <div className="digital-audit-layout__text-content__bottom">
        <RichTextContent
          content={digitalAuditPage.contentBottom}
        />
      </div>
    </GlobalLayout>
  </BackgroundSwinger>
);
