import { BsMegaphone as icon } from 'react-icons/bs';

export default {
  name: 'logline',
  title: 'Logline',
  type: 'object',
  icon,
  fields: [
    {
      name: 'quoteCautionNote',
      type: 'note',
      options: {
        headline: 'Note',
        message:
          "You do not need to write 'Logline:' before your title as the site will do this for you",
        tone: 'caution',
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
      description: "Ex. 'Animated Comedy'",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
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
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: [{ type: 'article' }],
      description:
        'The article with the rest of the loglines should be linked here.',
    },
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
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
