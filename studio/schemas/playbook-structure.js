import React from 'react';
import { MdOutlineLineStyle as icon } from 'react-icons/md';

export default {
  name: 'playbookStructure',
  title: 'Playbook Structure',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Introduction',
      name: 'introduction',
      description:
        "Add the articles here that make up the playbook's introduction.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
    {
      title: 'The Why',
      name: 'why',
      description: "Add the articles here that make up the playbook's 'why'.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
    {
      title: 'Climate Storytelling',
      name: 'climateStorytelling',
      description:
        "Add the articles and subsections here that make up the playbook's contents.",
      type: 'array',
      of: [
        {
          type: 'playbookSection',
        },
      ],
    },
  ],
};
