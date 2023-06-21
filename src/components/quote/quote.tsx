import React from 'react';
import Image from 'next/image';

interface QuoteProps {
  author: string;
  text: string;
  image: string;
};

export const Quote: React.FC<QuoteProps> = ({
  author,
  text,
  image,
}) => (
  <div className="quote">
    <div className="quote__image">
      <Image
        src={image}
        layout="fill"
        alt="author"
        loading="lazy"
        objectFit="cover"
      />
    </div>

    <div className="quote__text-wrapper">
      <p className="quote__citation">
        {text}
      </p>

      <p className="quote__author">
        {author}
      </p>
    </div>
  </div>
);
