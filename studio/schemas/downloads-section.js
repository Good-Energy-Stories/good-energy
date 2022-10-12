import { BsDownload as icon } from 'react-icons/bs';

export default {
  name: 'downloadsSection',
  title: 'Downloads Section',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Download Buttons',
      name: 'downloadButtons',
      type: 'array',
      of: [{ type: 'ctaButton' }],
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
