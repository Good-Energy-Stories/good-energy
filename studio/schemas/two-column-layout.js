import { BsColumnsGap as icon } from 'react-icons/bs';

export default {
  name: 'twoColumnLayout',
  title: 'Two Column Layout',
  type: 'object',
  icon,
  fields: [
    {
      name: 'leftColumn',
      title: 'Left Column',
      type: 'array',
      of: [
        { type: 'writtenContent' },
        { type: 'quote' },
        { type: 'ctaButton' },
        { type: 'ctaLink' },
        { type: 'spotIllustration' },
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rightColumn',
      title: 'Right Column',
      type: 'array',
      of: [
        { type: 'writtenContent' },
        { type: 'quote' },
        { type: 'ctaButton' },
        { type: 'ctaLink' },
        { type: 'spotIllustration' },
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {},
    prepare(selection) {
      return {
        title: 'Two Column Layout',
      };
    },
  },
};
