import React from 'react';
import { BsCircleFill as icon } from 'react-icons/bs';

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'lede',
      title: 'Lede',
      type: 'string',
    },
    {
      name: 'byline',
      title: 'Byline',
      type: 'string',
    },
    {
      title: 'Project Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Related',
      name: 'related',
      description:
        'You can add any number of related articles or character profiles here.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }, { type: 'characterProfile' }],
        },
      ],
    },
  ],
};
