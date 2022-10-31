import { BsWindow as icon } from 'react-icons/bs';
import pageContent from './page-content';

export default {
  name: 'page',
  title: 'Page',
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
      description: 'This is the title that will appear at the top of the page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'navigationTitle',
      title: 'Navigation Title',
      type: 'string',
      description: 'This is the title that will appear in the navigation',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showHeader',
      title: 'Show Header',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showHeaderBorder',
      title: 'Show Header Border',
      description: 'Should the header have a border underneath it.',
      type: 'boolean',
    },
    {
      title: 'Banner Image',
      name: 'bannerImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''), // Trim - from end of text.slice(0, 200),
      },
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
    {
      title: 'Next Up',
      name: 'nextUp',
      type: 'reference',
      to: [{ type: 'aboutPage' }, { type: 'article' }],
    },
    {
      title: 'Page Content',
      description: 'This is the content that will appear on the page',
      name: 'content',
      type: 'array',
      of: pageContent,
    },
  ],
};
