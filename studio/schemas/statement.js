import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'statement',
  title: 'Statement',
  type: 'object',
  icon,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
  ],
};
