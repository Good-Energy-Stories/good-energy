import React from 'react';
import { BiNavigation as icon } from 'react-icons/bi';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Offerings',
      name: 'offerings',
      description: 'The order that offerings pages should appear in.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'offeringsPage' }, { type: 'playbookHome' }],
        },
      ],
    },
    {
      title: 'About',
      name: 'about',
      description: 'The order that about pages should appear in.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'aboutPage' }],
        },
      ],
    },
  ],
};
