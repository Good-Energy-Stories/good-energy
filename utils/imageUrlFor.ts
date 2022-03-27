import React from 'react';
import { sanity as client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function imageUrlFor(source) {
  return builder.image(source);
}
