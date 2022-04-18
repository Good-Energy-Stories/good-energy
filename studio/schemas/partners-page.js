import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'partnersPage',
  title: 'Partners Page',
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
      description: "Ex. 'Our Partners'",
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the Good Energy partners',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Sections',
      name: 'sections',
      description:
        'This is where you select the order of the partner sections as they should show up on the partners page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partnerSection' }],
        },
      ],
    },
  ],
  preview: {},
};
