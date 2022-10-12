import { BsImages as icon } from 'react-icons/bs';

export default {
  name: 'imageCarousel',
  title: 'Image Carousel',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Image Carousel',
      };
    },
  },
};
