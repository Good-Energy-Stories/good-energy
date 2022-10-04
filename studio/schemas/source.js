import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'source',
  title: 'Source',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      description: 'Link to relevant source if applicable',
    },
  ],
};
