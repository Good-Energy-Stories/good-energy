import { BsLayoutThreeColumns as icon } from 'react-icons/bs';

export default {
  name: 'playbookThreeColumn',
  title: 'Playbook Three Column Layout',
  type: 'object',
  icon,
  fields: [
    {
      name: 'layoutNote',
      type: 'note',
      options: {
        headline: 'Important',
        message:
          'The articles put in the left and right columns will appear smaller. Remember to put what you want to highlight in the center column.',
      },
    },
    {
      title: 'Left Column',
      name: 'leftColumn',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'quoteCollection' },
          ],
        },
      ],
    },
    {
      title: 'Main Column',
      name: 'mainColumn',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'quoteCollection' },
          ],
        },
      ],
    },
    {
      title: 'Right Column',
      name: 'rightColumn',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'quoteCollection' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      quote: 'quote',
    },
    prepare(selection) {
      return {
        title: 'Three Column Layout',
      };
    },
  },
};
