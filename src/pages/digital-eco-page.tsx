import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { DigitalEcoLayout } from '../layouts/digital-eco-layout';
import { DigitalEcoData, DigitalEcoPageProps, FooterData, NavbarItemFields } from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

interface DigitalEcoPageData {
  digitalEcoPage?: DigitalEcoData;
  navbar?: NavbarItemFields[];
  footer?: FooterData;
};

export const getServerSideProps: GetServerSideProps<DigitalEcoPageData> = async ({ locale = DEFAULT_LOCALE}) => {
  try {
    const digitalEcoFacade = require('../services/digital-eco').getDigitalEcoFacade();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const digitalEcoPage = await digitalEcoFacade.getDigitalEcoPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        digitalEcoPage,
        navbar,
        footer,
      },
    };
  } catch (err) {
    return {
      props: {
        // errorCode: getErrorCode(err),
      },
    };
  }
};

const DigitalEcoPage: NextPage<DigitalEcoPageProps> = ({
  digitalEcoPage,
  navbar,
  footer,
}) => {
  if (!digitalEcoPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }

  return (
    <DigitalEcoLayout
      navbar={navbar}
      digitalEcoPage={digitalEcoPage}
      footer={footer}
    />
  );
};

export default DigitalEcoPage;
