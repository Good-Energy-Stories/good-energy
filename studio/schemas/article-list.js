import React from 'react';
import { FaRegListAlt as icon } from 'react-icons/fa';

export default {
  name: 'articleList',
  title: 'Article List',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Content',
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
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
        title: title ?? 'Article List',
      };
    },
  },
};
