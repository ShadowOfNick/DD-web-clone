import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CarouselTitle } from './carousel-title';
import { CarouselSlideFields } from '../../services';

export const CarouselItem: React.FC<CarouselSlideFields> = ({
  title,
  description,
  imageUrl,
  link,
}) => (
  <Link href={link} data-testid="carousel-item">
    <a className="carousel-item">
      <div className="carousel-item__wrapper">
        <Image
          src={imageUrl}
          alt="carousel-item-image"
          layout="fill"
          objectFit="cover"
          priority
        />

        <div className="carousel-item__wrapper__title">
          <CarouselTitle
            text={title}
            className="carousel-item__wrapper__title__text"
          />
        </div>

        <div className="carousel-item__wrapper__subtitle">
          <p className="carousel-item__wrapper__subtitle__text">
            {description}
          </p>
        </div>
      </div>
    </a>
  </Link>
);
