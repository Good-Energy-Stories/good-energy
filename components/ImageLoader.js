import Image from 'next/image';
import React from 'react';

import { imageUrlFor } from '../utils/imageUrlFor';

const ImageLoader = ({ alt, src, width = 1080 }) => {
  const { imageAspect } = src;
  const image = imageUrlFor(src).width(width).auto('format').url();
  const placeholder = imageUrlFor(src).width(200).auto('format').url();
  return (
    <Image
      alt={alt}
      layout="responsive"
      src={image}
      placeholder="blur"
      blurDataURL={placeholder}
      width={width}
      height={width / imageAspect}
    />
  );
};

export default ImageLoader;
