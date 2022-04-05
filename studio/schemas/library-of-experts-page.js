import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'libraryOfExpertsPage',
  title: 'Library of Experts Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Library of Experts'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the featured voices',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {},
};
