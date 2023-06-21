import React from 'react';
import Image from 'next/image';
import { FloatingPortal } from '@floating-ui/react';
import { ImageWithLightbox } from './image-with-lightbox';
import { ImageContentProps } from '../../services';

export const ImageContent: React.FC<ImageContentProps> = ({
  src,
  modalSrc,
  alt,
  width,
  height,
  isGallery = false,
}) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    show
      ? (document.body.classList.add('noscroll'))
      : (document.body.classList.remove('noscroll'));

    const closeOnEscape = (event: KeyboardEvent) => {
      if (show && event.key === 'Escape') {
        setShow(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [show]);

  return (
    <>
      <div className={isGallery ? 'image-content__gallery' : 'image-content__image'}>
        {isGallery ? (
          <Image
            src={src}
            alt={alt}
            layout="fill"
            loading="lazy"
            objectFit="cover"
            onClick={() => setShow(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || undefined} //think about it
            height={height || undefined} //think about it
            layout="responsive"
            loading="lazy"
            objectFit="cover"
            onClick={() => setShow(true)}
          />
        )}
      </div>
      <FloatingPortal>
        {show && (
          <ImageWithLightbox
            src={modalSrc}
            alt={alt}
            show={show}
            onClose={() => setShow(false)}
          />
        )}
      </FloatingPortal>
    </>
  );
};
