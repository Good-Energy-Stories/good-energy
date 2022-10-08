import { BsMegaphone as icon } from 'react-icons/bs';

export default {
  name: 'logline',
  title: 'Logline',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
    },
    {
      title: 'Article',
      name: 'article',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      articleTitle: 'article.title',
    },
    prepare(selection) {
      const { articleTitle } = selection;
      return {
        title: `Logline: ${articleTitle}`,
      };
    },
  },
};
