import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'pressPage',
  title: 'Press Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Recent Press'",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Press',
      name: 'content',
      description:
        'This is where you select the order of the press links as they should show up on the page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'press' }],
        },
      ],
    },
  ],
  preview: {},
};
