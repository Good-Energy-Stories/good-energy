import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'playbookHome',
  title: 'Playbook Home',
  type: 'document',
  icon,
  fieldsets: [
    {
      title: 'Masthead',
      name: 'masthead',
    },
  ],
  fields: [
    {
      title: 'Masthead',
      description:
        'This is where you change the first section of content on the playbook home page.',
      name: 'masthead',
      type: 'playbookThreeColumn',
    },

    {
      title: 'Content',
      name: 'content',
      description:
        'This is where you change the rest of the body content on the playbook home page.',
      type: 'array',
      of: [
        {
          type: 'playbookThreeColumn',
        },
        {
          type: 'emailCapture',
        },
        {
          type: 'playbookQuote',
        },
        {
          type: 'reference',
          to: [{ type: 'playlist' }],
        },
      ],
    },
  ],
  preview: {},
};
