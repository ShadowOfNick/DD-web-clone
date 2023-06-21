import React from 'react';
import { useTranslation } from 'next-i18next';
import { GlobalLayout } from '../global-layout';
import {
  BackgroundSwinger,
  Button,
  HeroBanner,
  ImageContent,
  RichTextContent,
  Schedule,
} from '../../components';
import { EventPageLayoutProps } from '../../services';

export const EventPageLayout: React.FC<EventPageLayoutProps> = ({
  eventPage,
  navbar,
  footer,
}) => {
  const { t } = useTranslation('common');
  return (
    <BackgroundSwinger
      className="event-page-layout"
      initialColor={{
        red: 157,
        green: 212,
        blue: 207,
      }}
    >
      <GlobalLayout
        pageTitle={eventPage.title}
        navbarItems={navbar}
        footer={footer}
      >
        <div className="event-page-layout__hero-banner-container">
          <HeroBanner
            title={eventPage.title}
            image={eventPage.mainImage}
          />
        </div>

        {eventPage.contentTop && (
          <div className="event-page-layout__text-content__top">
            <RichTextContent
              content={eventPage.contentTop}
            />
          </div>
        )}

        {eventPage.linkForRegistration && (
          <div className="event-page-layout__button">
            <Button
              text={t('common.eventRegistratiton')}
              link={eventPage.linkForRegistration}
              color="mustard"
              external
            />
          </div>
        )}

        {eventPage.schedule && (
          <Schedule
            title={eventPage.schedule.title}
            subtitle={eventPage.schedule.subtitle}
            scheduleItems={eventPage.schedule.scheduleItems}
          />
        )}

        {eventPage.bodyImage && (
          <div className="event-page-layout__text-content__body-image">
            <RichTextContent
              content={eventPage.bodyImage}
            />
          </div>
        )}

        {eventPage.contentBottom && (
          <div className="event-page-layout__text-content__bottom">
            <RichTextContent
              content={eventPage.contentBottom}
            />
          </div>
        )}

        {eventPage.galleryItems && (
          <div className="event-page-layout__gallery">
            <p className="event-page-layout__gallery__title">
              {eventPage.galleryTitle}
            </p>
            {eventPage.galleryItems.map((galleryItem, index) => (
              <ImageContent
                key={index}
                src={galleryItem.src}
                modalSrc={galleryItem.modalSrc}
                alt={galleryItem.title}
                width={galleryItem.width}
                height={galleryItem.height}
                isGallery={(eventPage.galleryItems.length > 1) ? true : false}
              />
            ))}
          </div>
        )}
        </GlobalLayout>
    </BackgroundSwinger>
  );
};
