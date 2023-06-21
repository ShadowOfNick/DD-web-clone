import React from 'react';
import { useTranslation } from 'next-i18next';
import { ProjectSectionCard } from './project-section-card';
import { Button } from '../button';
import { ProjectSectionProps } from '../../services';

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  projectDetailData,
}) => {
  const [loadedProjects, setLoadedProjects] = React.useState(4);
  const { t } = useTranslation('common');

  const loadMoreProjects = () => {
    setLoadedProjects(loadedProjects + 4);
    if (loadedProjects >= projectDetailData.length) {
      setLoadedProjects(projectDetailData.length);
    }
  };

  return (
    <div className="project-section">
      <h2 className="project-section__title" data-testid="project-section-title">
        {title}
      </h2>

      <p className="project-section__description" data-testid="project-section-description">
        {description}
      </p>

      <div className="project-section__cards">
        {projectDetailData.slice(0, loadedProjects).map((item, index) => (
          <ProjectSectionCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.imageUrl}
            link={item.slug}
          />
        ))}
      </div>

      {loadedProjects < projectDetailData.length && (
        <div className="project-section__button-wrapper">
          <Button
            text={t('common.button')}
            color="azure"
            onClick={loadMoreProjects}
            data-testid="more-projects-button"
          />
        </div>
      )}
    </div>
  );
};
