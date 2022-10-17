/*  ------------------------------ */
/*  Image helpers
/*  ------------------------------ */

// @ts-nocheck

import { imageBuilder } from '../utils/imageUrlFor';

export function buildSrc(image: any, { width, height, format, quality }: any) {
  let imgSrc = imageBuilder.image(image);

  if (width) {
    imgSrc = imgSrc.width(Math.round(width));
  }

  if (height) {
    imgSrc = imgSrc.height(Math.round(height));
  }

  if (format) {
    imgSrc = imgSrc.format(format);
  }

  if (quality) {
    imgSrc = imgSrc.quality(quality);
  }

  return imgSrc.fit('max').auto('format').url();
}

export function buildSrcSet(
  image: any,
  { srcSizes, aspect, format, quality }: any,
) {
  const sizes = srcSizes.map((width) => {
    let imgSrc = buildSrc(image, {
      ...{ width },
      height: aspect && Math.round(width * aspect) / 100,
      ...{ format },
      ...{ quality },
    });

    if (format) {
      imgSrc = imgSrc.format(format);
    }

    return `${imgSrc} ${width}w`;
  });

  return sizes.join(',');
}
