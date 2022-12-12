import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import Page from './page';

export default {
  name: 'errorPage',
  title: 'Error Page',
  type: 'document',
  icon: BsFillExclamationOctagonFill,
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        icon: BsFillExclamationOctagonFill,
        message:
          'This page will be shown when a user tries to access a page that does not exist.',
        tone: 'critical',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is the title that will appear at the top of the page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Some information about this page that will appear under the title at the top',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
