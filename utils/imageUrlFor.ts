import React from 'react';
import { sanity as client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

export const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
  return imageBuilder.image(source);
}
