import React from 'react';
import { BsFillGridFill as icon } from 'react-icons/bs';

export default {
  name: 'partnerSection',
  title: 'Partner Section',
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
      name: 'size',
      title: 'Size',
      type: 'string',
      description:
        'This determines if the partner section should take up the full width of the screen or only half.',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Half', value: 'half' },
          { title: 'Full', value: 'full' },
        ],
      },
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
      name: 'showLinkToPartnersPage',
      title: 'Show Link To Partners Page',
      type: 'boolean',
      description:
        'If this is toggled on, a CTA button that links to the partners page will be appended to the bottom of the section',
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
