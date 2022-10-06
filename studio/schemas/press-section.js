import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'pressSection',
  title: 'Press Section',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Content',
      name: 'content',
      description:
        'This is where you select the order of the press links as they should show up on the page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'press' }],
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Press Section',
      };
    },
  },
};
