import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';

export default {
  name: 'twoWorldsSection',
  title: 'Two Worlds Section',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Historic Heatwaves'",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },

    {
      title: 'Illustration',
      name: 'illustration',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
};
