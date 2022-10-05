import { BsColumnsGap as icon } from 'react-icons/bs';

export default {
  name: 'twoColumnLayout',
  title: 'Two Column Layout',
  type: 'object',
  icon,
  fields: [
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
      name: 'leftColumn',
      title: 'Left Column',
      type: 'halfPageContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rightColumn',
      title: 'Right Column',
      type: 'halfPageContent',
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
