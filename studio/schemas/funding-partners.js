import React from 'react';
import { BsFillGridFill as icon } from 'react-icons/bs';

export default {
  name: 'fundingPartners',
  title: 'Funding Partners',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Funding Partners'",
    },
    {
      name: 'CTAText',
      title: 'CTA Button Text',
      type: 'string',
      description: "What the button should say. ex. 'See All Partners', etc.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'CTALink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Where the button should link to (slug)',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Partners',
      name: 'partners',
      description: 'You can add any number of partners to a section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partner' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      byline: 'byline',
    },
    prepare(selection) {
      const { title, byline } = selection;

      return {
        title: title ?? 'Partner Section',
        subtitle: byline,
      };
    },
  },
};
