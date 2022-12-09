import { BsMegaphone as icon } from 'react-icons/bs';

export default {
  name: 'endOfYearReportPage',
  title: 'End of Year Report Page',
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
    },
    {
      name: 'report',
      title: 'Report',
      type: 'file',
      description: 'Upload the PDF of the report here',
      options: {
        accept: '.pdf',
        hotpot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: `End of Year Report Page`,
      };
    },
  },
};
