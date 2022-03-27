import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';

export default {
  name: 'articleSection',
  title: 'Article Section',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'includeSpotIllustration',
      title: 'Include Spot Illustration',
      type: 'boolean',
    },

    {
      title: 'Spot Illustration',
      name: 'spotIllustration',
      hidden: ({ parent }) => parent?.includeSpotIllustration !== true,
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
};
