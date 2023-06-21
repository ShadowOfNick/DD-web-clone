import React from 'react';
import Image from 'next/image';
import { Button } from '../button';
import { CareerSectionFields } from '../../services';

export const CareerSection: React.FC<CareerSectionFields> = ({
  title,
  subtitle = null,
  description,
  positions,
  buttonLink,
  buttonTitle,
  careerImage,
}) => (
  <div className="career-section" data-testid="career-section">
    <h2 className="career-section__title">
      {title}
    </h2>

    <div className="career-section__wrapper">
      <ul className="career-section__positions">
        {subtitle && (
          <li className="career-section__positions__item">
            {subtitle}
          </li>
        )}

        {positions.map((item, index) => (
          <li className="career-section__positions__item" key={index}>
            {item}
          </li>
        ))}
      </ul>

      <div className="career-section__image">
        <Image
          src={careerImage}
          alt="career-image"
          layout="fill"
          loading="lazy"
          objectFit="cover"
          data-testid="career-section-image-item"
        />
      </div>

      <p className="career-section__description">
        {description}
      </p>
    </div>

    <Button
      text={buttonTitle}
      link={buttonLink}
      color="mustard"
      external
      data-testid="career-section-link"
    />

  </div>
);
