import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export const RelatedProjectCard: React.FC<RelatedProjectCardProps> = ({
  title,
  subtitle,
  image,
  link,
}) => (
  <Link href={link}>
    <a className="related-project-card">
      <div
        className="related-project-card__content"
      >
        <Image
          src={image}
          alt="related-project-image"
          layout="fill"
          objectFit="cover"
        />
        <h4 className="related-project-card__content__title">
          {title}
        </h4>

        <h5 className="related-project-card__content__subtitle">
          {subtitle}
        </h5>
      </div>
    </a>
  </Link>
);
