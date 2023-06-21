import React from 'react';
import { GlobalLayout } from '../global-layout';
import { BackgroundSwinger, RichTextContent } from '../../components';
import { GDPRProps } from '../../services';

export const GDPRLayout: React.FC<GDPRProps> = ({
  gdprPage,
  navbar,
  footer,
}) => (
  <BackgroundSwinger
    className="gdpr-layout"
    initialColor={{
      red: 160,
      green: 220,
      blue: 255,
    }}
  >
    <GlobalLayout
      pageTitle={gdprPage.title}
      navbarItems={navbar}
      footer={footer}
    >
      <div className="gdpr-layout__content">
        <div className="gdpr-layout__content__images-behind-title">
          <div className="gdpr-layout__content__title">
            <h2 className="gdpr-layout__content__title__text">
              {gdprPage.title}
            </h2>
          </div>
        </div>

        <div className="gdpr-layout__content__text">
          <RichTextContent
            content={gdprPage.content}
          />
        </div>
      </div>
    </GlobalLayout>
  </BackgroundSwinger>
);
