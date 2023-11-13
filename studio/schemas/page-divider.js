import { AiOutlineLine as icon } from 'react-icons/ai';

export default {
  name: 'pageDivider',
  title: 'Page Divider',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Include Label',
      name: 'includeLabel',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Margin Bottom',
      name: 'marginBottom',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Clear Top Padding',
      name: 'clearTopPadding',
      type: 'boolean',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'This is optional',
    },
    {
      title: 'Label Size',
      name: 'labelSize',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Extra Large', value: 'extra-large' },
        ],
      },
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
  select: {
    label: 'label',
  },
  preview: {
    prepare(selection) {
      const { label } = selection;
      return {
        title: label ?? 'Page Divider',
      };
    },
  },
};
