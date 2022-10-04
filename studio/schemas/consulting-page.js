import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'consultingPage',
  title: 'Consulting Page',
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
      description: "Ex. 'Consulting Services'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some information about Good Energy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'callout' },
        { type: 'emailCapture' },
        { type: 'reference', to: [{ type: 'climateLensBlock' }] },
      ],
    },
  ],
  preview: {},
};
