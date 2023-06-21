import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EventPageLayout } from '../layouts';
import { EventPageDataProps, EventPageLayoutProps, FooterData, NavbarItemFields } from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

interface EventPageProps {
  eventPage?: EventPageDataProps;
  navbar?: NavbarItemFields[];
  footer?: FooterData;
  locale: string;
};

export const getServerSideProps: GetServerSideProps<EventPageProps> = async ({ locale = DEFAULT_LOCALE }) => {
  const commonProps = {
    ...(await serverSideTranslations(locale as string, ['common'])),
    locale,
  };

  try {
    const eventFacade = require('../services/event-page').getEventFacade();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const eventPage = await eventFacade.getEventPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        ...commonProps,
        eventPage,
        navbar,
        footer,
      },
    };
  } catch (err) {
    return {
      props: {
        ...commonProps,
        // errorCode: getErrorCode(err),
      },
    };
  }
};

const EventPage: NextPage<EventPageLayoutProps> = ({
  eventPage,
  navbar,
  footer,
}) => {
  if (!eventPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }

  return (
    <EventPageLayout
      navbar={navbar}
      eventPage={eventPage}
      footer={footer}
    />
  );
};
export default EventPage;
