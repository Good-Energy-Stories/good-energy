import { BiLinkAlt as icon } from 'react-icons/bi';

export default {
  name: 'socials',
  title: 'Socials',
  type: 'object',
  icon,
  fields: [
    {
      name: 'socialsNote',
      type: 'note',
      options: {
        headline: 'Note',
        message:
          "Add links to Good Energy's socials here. These links will appear in the footer on every page.",
      },
    },
    {
      name: 'twitter',
      type: 'url',
      description: "A link to Good Energy's Twitter",
    },
    {
      name: 'instagram',
      type: 'url',
      description: "A link to Good Energy's Instagram",
    },
    {
      name: 'facebook',
      type: 'url',
      description: "A link to Good Energy's Facebook",
    },
  ],
};
