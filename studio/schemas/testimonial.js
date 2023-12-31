import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',

      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
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
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      description: 'How large the testimonial text should appear.',
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
      name: 'attribution',
      title: 'Attribution',
      type: 'attributionIndividual',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      content: 'content',
      image: 'attribution.image',
    },
    prepare(selection) {
      const { content, image } = selection;

      return {
        title: content,
        media: image,
      };
    },
  },
};
