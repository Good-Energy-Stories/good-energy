import { BsHammer as icon } from 'react-icons/bs';

export default {
  name: 'workshopsPage',
  title: 'Workshops Page',
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
      description: "Ex. 'Workshops and Presentations'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some information about Good Energy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Page Content',
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
  preview: {},
};
