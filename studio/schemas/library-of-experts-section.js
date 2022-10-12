import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'libraryOfExpertsSection',
  title: 'Library of Experts Section',
  type: 'document',
  icon,
  fields: [
    {
      name: 'showTagFilter',
      title: 'Show Tag Filter',
      type: 'boolean',
      description: 'If users can filter by tag',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showAlphabeticalFilter',
      title: 'Show Alphabetical Filter',
      type: 'boolean',
      description: 'If users can switch order alphabetically',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Library of Experts Section',
      };
    },
  },
};
