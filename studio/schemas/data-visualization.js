import { BsClipboardData as icon } from 'react-icons/bs';

export default {
  name: 'dataVisualization',
  title: 'Data Visualization',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This is optional, only if your chart should have a small title right above it.',
    },
    {
      title: 'Graphic',
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
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title ?? 'Data Visualization',
      };
    },
  },
};
