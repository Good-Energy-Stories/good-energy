/**
 * offering.js
 *
 * Schema for (single) service offering blurb, currently on the home page.
 */

import { BsPlusLg as icon } from 'react-icons/bs';

export default {
  name: 'offering',
  title: 'Offering',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Heading Name',
      type: 'string',
      description: "Ex. 'Consulting', 'Workshops', 'Playbook', 'Research'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'displayTitle',
      title: 'Display Title',
      type: 'string',
      description: 'Heading for the page. ex. "Explore Climate in Any Story"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description of the offering.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image to represent this offering.',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'CTAText',
      title: 'CTA Button Text',
      type: 'string',
      description:
        "What the button should say. ex. 'View Menu of Services', 'Book A Workshop', etc.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'CTALink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Where the button should link to (slug)',
      validation: (Rule) => Rule.required(),
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
