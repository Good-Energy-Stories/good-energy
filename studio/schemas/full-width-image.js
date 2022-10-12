import { BsCardImage as icon } from 'react-icons/bs';

export default {
  name: 'fullWidthImage',
  title: 'Full Width Image',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Full Width Image',
      };
    },
  },
};
