import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'attributionIndividual',
  title: 'Attribution Individual',
  type: 'object',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Their professional title',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'source',
      description:
        "Source if applicable. You should also use this section for an individual's related instituion",
    },

    {
      title: 'Image',
      name: 'image',
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
  ],
  preview: {},
};
