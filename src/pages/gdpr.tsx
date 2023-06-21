import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { GDPRLayout } from '../layouts';
import {
  FooterData,
  GDPRPageData,
  GDPRProps,
  // getGDPRFacade,
  getGDPRPageData,
  NavbarItemFields,
} from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

// ===== API CONNECTION =====

interface GDPRData {
  gdprPage?: GDPRPageData;
  navbar?: NavbarItemFields[];
  footer?: FooterData;
}

export const getServerSideProps: GetServerSideProps<GDPRData> = async ({ locale = DEFAULT_LOCALE}) => {
  try {
    // const gdprFacade = getGDPRFacade();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const gdprPage = await getGDPRPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        gdprPage,
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

// ===== COMPONENT =====

const GDPRPage: NextPage<GDPRProps> = ({
  gdprPage,
  navbar,
  footer,
}) => {
  if (!gdprPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }

  return (
    <>
      <Head>
        <title>Deloite Digital - {gdprPage.title}</title>
      </Head>
      <GDPRLayout
        gdprPage={gdprPage}
        navbar={navbar}
        footer={footer}
      />
    </>
  );
};

export default GDPRPage;
