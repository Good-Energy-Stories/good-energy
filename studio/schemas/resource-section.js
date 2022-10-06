import React from 'react';
import { BsPlusLg as icon } from 'react-icons/bs';

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
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'None', value: 'none' },
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
      },
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
