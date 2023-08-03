/**
 * client.js
 *
 * Schema for client logo display.
 */

import { FaPeopleCarry as icon } from 'react-icons/fa';

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      description:
        "Providing a link to a client's website will make clicking on their logo link there.",
      type: 'url',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
};
