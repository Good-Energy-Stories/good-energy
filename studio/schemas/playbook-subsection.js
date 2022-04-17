import React from 'react';
import { FaRegListAlt as icon } from 'react-icons/fa';

export default {
  name: 'playbookSubsection',
  title: 'Playbook Subsection',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Introduction to Climate Storytelling', 'Story World'",
    },
    {
      title: 'Contents',
      name: 'contents',
      description: 'You can add either articles or subsections to a section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'twoWorldsArticle' }, { type: 'article' }],
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
