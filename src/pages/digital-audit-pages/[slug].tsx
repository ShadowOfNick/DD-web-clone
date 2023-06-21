import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DigitalAuditLayout } from '../../layouts/digital-audit-layout';
import { DigitalAuditPageProps } from '../../services';

const DEFAULT_LOCALE = 'cs-CZ';

export const getServerSideProps = async ({
  params,
  locale = DEFAULT_LOCALE,
} : {
  params: {
    slug: string;
  };
  locale: string;
}) => {
  const commonProps = {
    ...(await serverSideTranslations(locale as string, ['common'])),
    locale,
  };

  try {
    const digitalAuditFacade = require('../../services/digital-audit').getDigitalAuditFacade();
    const navbarFacade = require('../../services/navbar').getNavbarFacade();
    const footerFacade = require('../../services/footer').getFooterFacade();

    const digitalAuditPage = await digitalAuditFacade.getDigitalAuditPageData(locale, params.slug);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        ...commonProps,
        digitalAuditPage,
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

const DigitalAuditPage: NextPage<DigitalAuditPageProps> = ({
  digitalAuditPage,
  navbar,
  footer,
}) => (
  <DigitalAuditLayout
    navbar={navbar}
    digitalAuditPage={digitalAuditPage}
    footer={footer}
  />
);

export default DigitalAuditPage;
