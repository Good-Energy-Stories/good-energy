import React from 'react';
import { BsLayoutSplit as icon } from 'react-icons/bs';

export default {
  name: 'twoWorldsCompareSection',
  title: 'Two Worlds Compare Section',
  type: 'object',
  icon,
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: "Ex. '2035'",
    },
    {
      name: 'initialSection',
      title: 'Initial Section',
      type: 'string',
      description:
        'The section that should be intitially visible for this section.',
      options: {
        layout: 'radio',
        list: [
          { title: 'Rise', value: 'rise' },
          { title: 'Collapse', value: 'collapse' },
        ],
      },
    },
    {
      title: 'Collapse Illustration',
      name: 'collapseIllustration',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
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
    {
      title: 'Collapse',
      name: 'collapse',
      type: 'array',
      of: [{ type: 'twoWorldsSection' }],
    },
    {
      title: 'Rise Illustration',
      name: 'riseIllustration',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
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
    {
      title: 'Rise',
      name: 'rise',
      type: 'array',
      of: [{ type: 'twoWorldsSection' }],
    },
  ],
  preview: {
    select: {
      title: 'year',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
};
