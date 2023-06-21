import React from 'react';
import Image from 'next/image';
import { FocusCard } from '../../services';

export const Card: React.FC<FocusCard> = ({
  title,
  shortDescriptionItem,
  iconUrl,
}) => (
  <div className="card">
    <div className="card__icon">
      <div className="card__icon__circle">
        <div className="card__icon__circle__item">
          <Image
            src={iconUrl}
            alt="icon card"
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div className="card__content">
      <div className="card__content__ellipse" />

      <h2 className="card__content__title">
        {title}
      </h2>

      <ul className="card__content__description">
        {shortDescriptionItem.map((item, index) => (
          <li className="card__content__description__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
