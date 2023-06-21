import React from 'react';
import {
  BackgroundSwinger,
  Button,
  HeroBanner,
  RichTextContent,
} from '../../components';
import { GlobalLayout } from '../global-layout';
import { MktCampaignPageProps } from '../../services';

export const MktCampaignLayout: React.FC<MktCampaignPageProps> = ({
  mktcampaignPage,
  navbar,
  footer,
}) => (
  <BackgroundSwinger
    className="mkt-campaign-layout"
    initialColor={{
      red: 157,
      green: 212,
      blue: 207,
    }}
  >
    <GlobalLayout
      pageTitle='MKT Kampaň 2023'
      navbarItems={navbar}
      footer={footer}
    >
      <HeroBanner
        title={mktcampaignPage.title}
        subtitle={mktcampaignPage.description}
        image={mktcampaignPage.mainImage}
      />
      <div className='mkt-campaign-layout__text-content__top'>
        <RichTextContent
          content={mktcampaignPage.contentTop}
        />
      </div>
      <div className='mkt-campaign-layout__link'>
        <Button
          text={mktcampaignPage.buttonText}
          link={mktcampaignPage.link}
          color='mustard'
        />
      </div>

      {mktcampaignPage.contentBottom && (
        <div className='mkt-campaign-layout__text-content__bottom'>
          <RichTextContent
            content={mktcampaignPage.contentBottom}
          />
        </div>
      )}
    </GlobalLayout>
  </BackgroundSwinger>
);
