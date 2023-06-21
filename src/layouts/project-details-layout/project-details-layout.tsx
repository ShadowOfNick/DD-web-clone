import React from 'react';
import {
  BackgroundSwinger,
  HeroBanner,
  RelatedProjectsSlider,
  RichTextContent,
} from '../../components';
import { GlobalLayout } from '../global-layout';
import { ProjectDetailsPageProps } from '../../services';

export const ProjectDetailLayout: React.FC<ProjectDetailsPageProps> = ({
  projectDetailPage,
  relatedProjectsData,
  navbar,
  footer,
}) => (
  <BackgroundSwinger
    className="project-details-layout"
    initialColor={{
      red: 226,
      green: 230,
      blue: 136,
    }}
  >
    <GlobalLayout
      pageTitle={projectDetailPage.title}
      navbarItems={navbar}
      footer={footer}
    >
      <HeroBanner
        title={projectDetailPage.title}
        subtitle={projectDetailPage.subtitle}
        image={projectDetailPage.imageUrl}
        projectLead={projectDetailPage.projectLead}
      />

      <div className="project-details-layout__text-content">
        <RichTextContent
          content={projectDetailPage.projectDescription}
        />
      </div>

      <RelatedProjectsSlider
        relatedArticlesTitle={projectDetailPage.relatedArticlesTitle}
        projectDetailPage={relatedProjectsData.map(item => ({
        title: item.title,
        subtitle: item.subtitle,
        slug: item.slug,
        image: item.imageUrl,
      }))}/>
    </GlobalLayout>
  </BackgroundSwinger>
);
