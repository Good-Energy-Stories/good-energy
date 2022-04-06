import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';

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
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                icon: BiLink,
                fields: [
                  {
                    title: 'URL',
                    name: 'url',
                    type: 'url',
                  },
                ],
              },
              {
                name: 'footnote',
                type: 'object',
                title: 'Footnote',
                icon: GiFootprint,
                fields: [
                  {
                    name: 'text',
                    type: 'array',
                    of: [{ type: 'block' }],
                  },
                ],
              },
            ],
          },
        },
      ],
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
