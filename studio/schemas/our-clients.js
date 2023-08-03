/**
 * our-clients.js
 *
 * Schema for client logo parade on homepage.
 */

import { BsFillGridFill as icon } from 'react-icons/bs';

export default {
  name: 'ourClients',
  title: 'Our Clients',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Our Clients'",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Supporting text for client logos.',
    },
    {
      name: 'CTAText',
      title: 'CTA Text',
      type: 'string',
      description:
        'Text for CTA button on clients page, ex. "See More Clients"',
    },
    {
      name: 'CTALink',
      title: 'CTA Link',
      type: 'url',
      description: 'Link for CTA button on clients page',
    },
    {
      title: 'Clients',
      name: 'clients',
      description: 'You can add up to five clients to this section.',
      type: 'array',
      validation: (Rule) => Rule.required().max(5),
      of: [
        {
          type: 'reference',
          to: [{ type: 'client' }],
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
        title: title ?? 'Our Clients Section',
        subtitle: byline,
      };
    },
  },
};
