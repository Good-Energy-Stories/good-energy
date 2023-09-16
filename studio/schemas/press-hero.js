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
      name: 'CTAText',
      title: 'CTA Text',
      type: 'string',
      description: 'Text for CTA button, ex. "See More Press"',
    },
    {
      name: 'CTALink',
      title: 'CTA Link',
      type: 'string',
      description: 'Link for CTA button (slug)',
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
