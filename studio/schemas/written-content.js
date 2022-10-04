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
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Written Content',
      };
    },
  },
};
