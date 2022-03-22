import { MdOutlineEmail as icon } from 'react-icons/md';

export default {
  name: 'emailCapture',
  title: 'Email Capture',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',

      options: {
        layout: 'radio',
        list: [
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
      },
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
