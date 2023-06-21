import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

interface HeroBannerProps {
  projectLead?: string;
  title: string;
  subtitle?: string;
  image: string;
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  projectLead = undefined,
  title,
  subtitle = undefined,
  image,
}) => {
  const { t } = useTranslation('common');

  return (
    <div className="hero-banner">
      <div className="hero-banner__main">
        <Image
          src={image}
          alt="project-image"
          layout="fill"
          objectFit="cover"
          priority
        />

        {projectLead && (
          <div className="hero-banner__main__project-leader-label">
            <h5 className="hero-banner__main__project-leader-label__title">
              <span>
                {t('common.projectlead')}
              </span>
            </h5>

            <h5 className="hero-banner__main__project-leader-label__name">
              {projectLead}
            </h5>
          </div>
        )}

        <div className="hero-banner__main__main-text-box">
          <h2 className="hero-banner__main__main-text-box__title">
            {title}
          </h2>

          {subtitle && 
            <h3 className="hero-banner__main__main-text-box__subtitle">
              {subtitle}
            </h3>
          }
        </div>
      </div>
    </div>
  );
};
