import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ConsultationLayout } from '../layouts';
import {
  ConsultationData,
  ConsultationPageProps,
  FooterData,
  NavbarItemFields,
} from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

interface ConsultationPageData {
  consultationPage?: ConsultationData;
  navbar?: NavbarItemFields[];
  footer?: FooterData;
};

export const getServerSideProps: GetServerSideProps<ConsultationPageData> = async ({ locale = DEFAULT_LOCALE}) => {
  try {
    const consultationFacade = require('../services/consultation').getConsultationFacade();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const consultationPage = await consultationFacade.getConsultationPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        consultationPage,
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

const ConsultationPage: NextPage<ConsultationPageProps> = ({
  consultationPage,
  navbar,
  footer,
}) => {
  if (!consultationPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }

  return (
    <ConsultationLayout
      consultationPage={consultationPage}
      navbar={navbar}
      footer={footer}
    />
  );
};

export default ConsultationPage;
