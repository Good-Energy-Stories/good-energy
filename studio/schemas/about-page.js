import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      description:
        "Ex. 'Good Energy is a nonprofit creative consultancy that’s unlocking the power of TV and film to inspire courage in the face of climate change.'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some information about Good Energy',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {},
};
