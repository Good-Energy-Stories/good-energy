import { BsCardImage as icon } from 'react-icons/bs';

export default {
  name: 'articleSpotIllustration',
  title: 'Image or Spot Illustration',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Full', value: 'full' },
        ],
      },
    },
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
    select: {
      image: 'image',
    },
    prepare(selection) {
      const { image } = selection;

      return {
        title: 'Spot Illustration',
        media: image,
      };
    },
  },
};
