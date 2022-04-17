import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';

export default {
  name: 'whyClimateTextBlock',
  title: 'Why Climate Text Block',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Text Size',
      name: 'textSize',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
};
