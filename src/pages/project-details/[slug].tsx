import React from 'react';
import type { NextPage } from 'next';
import { ProjectDetailLayout } from '../../layouts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ProjectDetailsPageProps } from '../../services';

const DEFAULT_LOCALE = 'cs-CZ';

export const getServerSideProps = async ({
  params,
  locale = DEFAULT_LOCALE,
} : {
  locale: string;
  params: {
    slug: string;
  };
}) => {
  const commonProps = {
    ...(await serverSideTranslations(locale as string, ['common'])),
    locale,
  };

  try {
    const projectDetailsFacade = require('../../services/project-details').getProjectDetailsFacade();
    const relatedProjectsFacade = require('../../services/project-details').getRelatedProjectsFacade();
    const navbarFacade = require('../../services/navbar').getNavbarFacade();
    const footerFacade = require('../../services/footer').getFooterFacade();

    const projectDetailPage = await projectDetailsFacade.getProjectDetailsPageData(locale, params.slug);
    const relatedProjectsData = await relatedProjectsFacade.getRelatedProjectsPageData(locale);
    const navbar = await navbarFacade.getNavbarData(locale);
    const footer = await footerFacade.getFooterData(locale);

    return {
      props: {
        ...commonProps,
        projectDetailPage,
        relatedProjectsData,
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

const ProjectDetailsPage: NextPage<ProjectDetailsPageProps> = ({
  projectDetailPage,
  relatedProjectsData,
  navbar,
  footer,
}) => {
  if (!relatedProjectsData || !projectDetailPage || !navbar || !footer) {
    return (
      <div>ERROR 404</div> // Create a 404 page
    );
  }
  return (
    <ProjectDetailLayout
      navbar={navbar}
      projectDetailPage={projectDetailPage}
      relatedProjectsData={relatedProjectsData.filter(item => item.title !== projectDetailPage.title)}
      footer={footer}
    />
  );
};
export default ProjectDetailsPage;
