import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
    },
  ],
};
