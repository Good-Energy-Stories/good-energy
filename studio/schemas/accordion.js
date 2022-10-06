import { GiAccordion as icon } from 'react-icons/gi';

export default {
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'standardPagePortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'boolean',
      description: 'Should this section add margin below. Defaults to true.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'twoColumnLayout',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Accordion',
      };
    },
  },
};
