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
        "Add the articles here that make up the playbook's 'Introduction'.",
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
      description: "Add the articles here that make up the playbook's 'Why'.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
    {
      name: 'structureNote',
      type: 'note',
      options: {
        headline: 'Playbook Structure Note',
        message:
          "This is where you can set the order of the articles and the sections they should appear in on the webite. This order determines the playbook table of contents on the site. To add a subsection (for example, 'Our Present' is a subsection of 'Story World' which is a subsection of 'Climate Storytelling') you can add sections within sections below. For special cases where we want to link something other than an article (Character Profile page, 'Maria's Two Worlds' and 'Why Climate Stories?'), you will also have the ability to link to their respective pages.",
      },
    },
    {
      title: 'Climate Storytelling',
      name: 'climateStorytelling',
      description:
        "Add the articles and subsections here that make up the playbook's contents.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'playbookSection',
            },
          ],
        },
      ],
    },
    {
      title: "What's Next",
      name: 'whatsNext',
      description:
        "Add the articles here that make up the playbook's 'What's Next'.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
  ],
};
