import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'pressHero',
  title: 'Press Hero',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Main Article',
      name: 'mainArticle',
      description: 'Main press article to feature',
      type: 'reference',
      to: [{ type: 'press' }],
    },
    {
      title: 'Content',
      name: 'content',
      description:
        'This is where you select the order of the press links as they should show up on the page.',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        {
          type: 'reference',
          to: [{ type: 'press' }],
        },
      ],
    },
  ],
};
