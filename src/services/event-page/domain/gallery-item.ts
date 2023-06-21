import { ImageAttributes } from '../../core';

export interface GalleryItem extends ImageAttributes {
  title: string;
  modalSrc: string;
};
