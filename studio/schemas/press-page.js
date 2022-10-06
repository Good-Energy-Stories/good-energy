import { BsGrid3X2GapFill as icon } from 'react-icons/bs';
import pageContent from './page-content';

export default {
  name: 'pressPage',
  title: 'Press Page',
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
      description: "Ex. 'Recent Press'",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page Content',
      description: 'This is the content that will appear on the page',
      name: 'content',
      type: 'array',
      of: pageContent,
    },
  ],
  preview: {},
};
