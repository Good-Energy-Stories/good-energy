import React from 'react';
import { FaRegListAlt as icon } from 'react-icons/fa';

export default {
  name: 'playbookSection',
  title: 'Playbook Section',
  type: 'object',
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
        { type: 'playbookSection' },
        {
          type: 'reference',
          to: [
            { type: 'whyClimateArticle' },
            { type: 'twoWorldsArticle' },
            { type: 'article' },
            { type: 'characterProfilesPage' },
          ],
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
