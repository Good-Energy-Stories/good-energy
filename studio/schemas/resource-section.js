import React from 'react';
import { FaRegListAlt as icon } from 'react-icons/fa';

export default {
  name: 'resourceSection',
  title: 'Resource Section',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Featured Resource', 'More of what we do'",
    },
    {
      title: 'Resources',
      name: 'resources',
      description: 'You can add any number of resources to a section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'resource' }],
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
