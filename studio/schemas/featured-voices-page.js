import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'featuredVoicesPage',
  title: 'Featured Voices Page',
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
      description: "Ex. 'Featured Voices'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the featured voices',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Featured Voices',
      name: 'featuredVoices',
      description:
        'This is where you select the order of the featured voices as they should show up on the partners page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featuredVoice' }],
        },
      ],
    },
  ],
  preview: {},
};
