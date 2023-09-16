import { BsNewspaper as icon } from 'react-icons/bs';
export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Link to the article.',
      type: 'url',
    },
    {
      title: 'Outlet',
      name: 'outlet',
      type: 'outlet',
    },
    {
      title: 'Alt Logo (For Press Hero section only)',
      description:
        'For example, a different color treatment with transparent background',
      name: 'altLogo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      logo: 'outlet.logo',
    },
    prepare(selection) {
      const { title, logo } = selection;

      return {
        title,
        media: logo,
      };
    },
  },
};
