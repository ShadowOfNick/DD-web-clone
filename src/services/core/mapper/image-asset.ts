import { Asset } from 'contentful';
import { ImageAttributes } from '../model';

interface MapImageOptions {
  requestedWidth?: number;
  requestedHeight?: number;
  format?: string;
  quality?: number;
};

export const mapImageAssetSrc = (item: Asset, options: MapImageOptions = {}): string => {
  const getMapImageOption = (label: string, value?: string | number) => value ? `${label}=${value}` : null;
  const getMapImageOptions = (options: MapImageOptions) => [
    getMapImageOption('w', options.requestedWidth),
    getMapImageOption('h', options.requestedHeight),
    getMapImageOption('fm', options.format),
    getMapImageOption('q', options.quality),
  ].filter(item => !!item).join('&');
  
  const optionsString = getMapImageOptions(options);

  return `https:${item.fields.file.url}${optionsString ? `?${optionsString}` : ''}`;
};

export const mapImageAsset = (item: Asset, requestedWidth?: number, requestedHeight?: number, format?: string, quality?: number): ImageAttributes => ({
  src: mapImageAssetSrc(item, {requestedWidth, requestedHeight, format, quality}),
  width: item.fields.file.details.image?.width || 0,
  height: item.fields.file.details.image?.height || 0,
});
