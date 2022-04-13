import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Get in Touch'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the contacts page',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {},
};
