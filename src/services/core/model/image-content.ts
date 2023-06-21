import { ImageAttributes } from './image-attributes';

export interface ImageContentProps extends ImageAttributes {
  alt: string;
  modalSrc: string;
  isGallery: boolean | null;
};
