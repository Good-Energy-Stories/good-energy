/**
 * our-offerings.js
 *
 * Schema for (set of) service offering blurbs, currently on the home page.
 */

import { BsPlusLg as icon } from 'react-icons/bs';

export default {
  name: 'ourOfferings',
  title: 'Our Offerings',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Our Offerings'",
    },
    {
      title: 'Offerings',
      name: 'offerings',
      description: 'You can add up to four offerings to this section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'offering' }],
        },
      ],
      validation: (Rule) => Rule.required().max(4),
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
