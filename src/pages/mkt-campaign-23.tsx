import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { MktCampaignLayout } from '../layouts';
import {
  MktCampaignPageProps,
  MktCampaignDataProps,
  NavbarItemFields,
  FooterData,
} from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

interface MktCampaignPageData {
  mktcampaignPage?: MktCampaignDataProps;
  navbar?: NavbarItemFields[];
  footer?: FooterData;
};

export const getServerSideProps: GetServerSideProps<MktCampaignPageData> = async ({ locale = DEFAULT_LOCALE }) => {
  try {
    const mktCampaign23Facade = require('../services/mkt-campaing-23').getMktCampaign23Facade();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const mktcampaignPage = await mktCampaign23Facade.getMktCampaign23PageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        mktcampaignPage,
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

const MKTcampaignPage: NextPage<MktCampaignPageProps> = ({
  mktcampaignPage,
  navbar,
  footer,
}) => (
  <MktCampaignLayout
    mktcampaignPage={mktcampaignPage}
    navbar={navbar}
    footer={footer}
  />
);

export default MKTcampaignPage;
