import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon,
  fields: [
    {
      name: 'quoteCautionNote',
      type: 'note',
      options: {
        headline: 'Note',
        message:
          'You do not need to wrap your text in quotes as the site will do this for you',
        tone: 'caution',
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'attribution',
      title: 'Attribution',
      type: 'attributionIndividual',
    },
  ],
};
