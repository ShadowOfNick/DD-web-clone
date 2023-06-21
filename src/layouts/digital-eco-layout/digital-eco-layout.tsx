import React from 'react';
import {
  BackgroundSwinger,
  HeroBanner,
  RichTextContent,
  Quote,
} from '../../components';
import { GlobalLayout } from '../global-layout';
import { DigitalEcoPageProps } from '../../services';

export const DigitalEcoLayout: React.FC<DigitalEcoPageProps> = ({
  navbar,
  digitalEcoPage,
  footer,
}) => (
  <BackgroundSwinger
    className="digital-eco-layout"
    initialColor={{
      red: 157,
      green: 212,
      blue: 207,
    }}
  >
    <GlobalLayout
      pageTitle={digitalEcoPage.title}
      navbarItems={navbar}
      footer={footer}
    >
      <HeroBanner
        title={digitalEcoPage.title}
        subtitle={digitalEcoPage.description}
        image={digitalEcoPage.mainImage}
      />

      <div className="digital-eco-layout__text-content__top">
        <RichTextContent
          content={digitalEcoPage.contentTop}
        />
      </div>

      <Quote
        author={digitalEcoPage.quote.author}
        text={digitalEcoPage.quote.text}
        image={digitalEcoPage.quote.image}
      />

      <div className="digital-eco-layout__text-content__bottom">
        <RichTextContent
          content={digitalEcoPage.contentBottom}
        />
      </div>
    </GlobalLayout>
  </BackgroundSwinger>
);
