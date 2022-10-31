import React from 'react';
import { MdOutlineLineStyle as icon } from 'react-icons/md';

export default {
  name: 'playbookStructure',
  title: 'Playbook Structure',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Navigation',
      name: 'navigation',
      description:
        "Add the articles and subsections here that make up the playbook's contents.",
      type: 'array',
      of: [
        { type: 'playbookSection' },
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfilesPage' },
            { type: 'whyClimateArticle' },
            { type: 'twoWorldsArticle' },
          ],
        },
      ],
    },
  ],
};
