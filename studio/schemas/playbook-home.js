import { BsGrid3X2GapFill as icon } from 'react-icons/bs';
import pageContent from './page-content';

export default {
  name: 'playbookHome',
  title: 'Playbook Home',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      name: 'navigationTitle',
      title: 'Navigation Title',
      type: 'string',
      description: 'This is the title that will appear in the navigation',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Some information about this page. This will appear in the masthead.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      description:
        'This is where you change the rest of the body content on the playbook home page.',
      type: 'array',
      of: pageContent,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Playbook Home',
      };
    },
  },
};
