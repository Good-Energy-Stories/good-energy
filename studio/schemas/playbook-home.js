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
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      title: 'Should Playbook Table of Contents Menu Be Open Initially',
      description:
        'This toggle controls the initial state of the Playbook Table of Contents Menu.',
      name: 'playbookTableOfContentsInitialState',
      type: 'boolean',
    },
    {
      title: 'Masthead',
      description:
        'This is where you change the first section of content on the playbook home page.',
      name: 'masthead',
      type: 'playbookThreeColumn',
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Some information about this page. This will appear in the masthead.',
      type: 'text',
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
