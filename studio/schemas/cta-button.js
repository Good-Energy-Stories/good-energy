import { BiRectangle as icon } from 'react-icons/bi';

export default {
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  icon,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Label Size',
      name: 'labelSize',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      title: 'Button Type',
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Fill', value: 'fill' },
          { title: 'Outline', value: 'outline' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Where to link to',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection) {
      const { label } = selection;

      return {
        title: label,
      };
    },
  },
};
