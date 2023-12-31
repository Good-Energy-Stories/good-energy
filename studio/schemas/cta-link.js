import { BiLinkAlt as icon } from 'react-icons/bi';

export default {
  name: 'ctaLink',
  title: 'CTA Link',
  type: 'object',
  icon,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Where to link to',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection) {
      const { label } = selection;

      return {
        title: label,
      };
    },
  },
};
