import { MdOutlineSubject as icon } from 'react-icons/md';

export default {
  name: 'writtenContent',
  title: 'Written Content',
  type: 'object',
  icon,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'standardPagePortableText',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Truncate Content',
      name: 'truncateContent',
      type: 'boolean',
      description:
        'If the text is very long, you may want to hide some of it initially and give the user the option to expand it to read more.',
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Written Content',
      };
    },
  },
};
