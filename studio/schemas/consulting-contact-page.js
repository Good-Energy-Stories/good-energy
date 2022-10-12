import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'consultingContactPage',
  title: 'Consulting Contact Page',
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
      description: "Ex. 'Reach Out'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Information about Good Energy Consulting',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
