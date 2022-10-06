import { BsMegaphone as icon } from 'react-icons/bs';

export default {
  name: 'fullWidthStatement',
  title: 'Full Width Statement',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
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
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare(selection) {
      const { content } = selection;
      return {
        title: content ?? 'Full Width Statement',
      };
    },
  },
};
