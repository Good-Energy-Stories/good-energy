import { BsHammer as icon } from 'react-icons/bs';

export default {
  name: 'offeringsPage',
  title: 'Offerings Page',
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
      validation: (Rule) => Rule.required(),
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
      title: 'Page Content',
      description: 'This is the content that will appear on the page',
      name: 'content',
      type: 'array',
      of: [
        { type: 'emailCapture' },
        { type: 'twoColumnLayout' },
        {
          type: 'reference',
          to: [{ type: 'climateLensBlock' }, { type: 'testimonial' }],
        },
      ],
    },
  ],
};
