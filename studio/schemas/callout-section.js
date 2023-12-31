import { MdOutlineChatBubbleOutline as icon } from 'react-icons/md';
export default {
  name: 'calloutSection',
  title: 'Callout Section',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
    },
    {
      name: 'clearTopRule',
      title: 'Clear Top Rule',
      type: 'boolean',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'callout' }],
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
        title: title ?? 'Callout Section',
      };
    },
  },
};
