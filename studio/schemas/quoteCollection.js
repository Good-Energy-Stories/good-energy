import { FaQuoteLeft as icon } from 'react-icons/fa';
export default {
  name: 'quoteCollection',
  title: 'Quote Collection',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Quote Collection Title',
      type: 'string',
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'quote',
        },
      ],
    },
  ],
};
