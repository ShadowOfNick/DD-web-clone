import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectSectionCardProps } from '../../../services';

export const ProjectSectionCard: React.FC<ProjectSectionCardProps> = ({
  title,
  subtitle,
  image,
  link,
}) => (
  <Link href={`/project-details/${link}`}>
    <a className="project-section-card" data-testid="project-section-card">
      <div
        className="project-section-card__wrapper"
      >
        <Image
          src={image}
          alt="project-image"
          layout="fill"
          objectFit="cover"
        />
        <h3 className="project-section-card__title">
          {title}
        </h3>

        <h4 className="project-section-card__subtitle">
          {subtitle}
        </h4>
      </div>
    </a>
  </Link>
);
