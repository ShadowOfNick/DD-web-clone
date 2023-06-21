import React from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomePageLayout } from '../layouts';
import { HomePageProps } from '../services';

const DEFAULT_LOCALE = 'cs-CZ';

export const getServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
  const commonProps = {
    ...(await serverSideTranslations(locale as string, ['common'])),
    locale,
  };

  try {
    const homePageFacade = require('../services/homepage').getHomepageFacade();
    const projectDetailPageFacade = require('../services/project-details').getRelatedProjectsPageData();
    const navbarFacade = require('../services/navbar').getNavbarFacade();
    const footerFacade = require('../services/footer').getFooterFacade();

    const homePage = await homePageFacade.getHomepagePageData(locale);
    const projectDetailPage = await projectDetailPageFacade.getRelatedProjectsPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        ...commonProps,
        homePage,
        projectDetailPage,
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

const Home: NextPage<HomePageProps> = ({
  homePage,
  projectDetailPage,
  navbar,
  footer,
  // emailResponseData,
}) => {
  const { t } = useTranslation('common');
  // const [contactFormServerData, setContactFormServerData] = React.useState<ContactFormServerData | null>(null);
  // const [loading, setLoading] = React.useState<boolean>(false);

  // const submitContactForm = async (data: FormContactData) => {
  //   const { recipient, subject } = emailResponseData;
  //   const emailContent: string[] = [data.message.replaceAll('\n', '%0D%0A'), '', `${data.name} (${data.company})`, data.email];
  //   data.phone.length > 0 && emailContent.push(data.phone);

  //   window.location.href = `mailto:${recipient}?subject=${subject}&body=${emailContent.join('%0D%0A')}`;

  //   // disable form submit for now, as we dont have production ready smtp
  //   /*setLoading(true);
  //   try {
  //     const mailData = {
  //       contactData: data,
  //       mailData: emailResponseData,
  //     };
  //     await axios.post('/api/send-email', mailData);
  //     setContactFormServerData({
  //       success: true,
  //       messageTitle: t('common.form.confirmationTitle'),
  //       messageText: t('common.form.confirmationText'),
  //     });
  //   } catch (err: any) {
  //     const { publicRuntimeConfig } = getConfig();
  //     setContactFormServerData({
  //       success: false,
  //       messageTitle: t('common.form.errorTitle'),
  //       messageText: t('common.form.errorText', { address: emailResponseData.replyTo }),
  //     });
  //   } finally {
  //     setLoading(false);
  //   }*/
  // };

  if (!homePage || !projectDetailPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }

  return (
    <HomePageLayout
      navbar={navbar}
      homePage={homePage}
      projectDetailPage={projectDetailPage}
      // contactFormServerData={contactFormServerData}
      // sendingInProgress={loading}
      footer={footer}
      // submitContactForm={submitContactForm}
    />
  )
};

export default Home;
