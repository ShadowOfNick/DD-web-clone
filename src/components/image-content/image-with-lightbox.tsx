import React from 'react';
import Image from 'next/image';

interface ImageWithLightboxProps {
  show: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

export const ImageWithLightbox: React.FC<ImageWithLightboxProps> = ({
  show,
  src,
  alt,
  onClose,
}) => {
  return (
    <div
      onClick={onClose}
      className={`image-content__lightbox${show ? ' image-content__lightbox--appear' : ''}`}
    >
      <div className="image-content__lightbox__content">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
