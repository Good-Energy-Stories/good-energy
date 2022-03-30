import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'articleQuote',
  title: 'Pull Quote',
  type: 'object',
  icon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      description:
        'Do not include the quotation marks here as the site will add them to all article quotes.',
      type: 'string',
    },
    {
      name: 'includeAttribution',
      title: 'Include Attribution',
      type: 'boolean',
    },
    {
      name: 'attribution',
      title: 'Attribution',
      hidden: ({ parent }) => parent?.includeAttribution !== true,
      type: 'string',
    },
  ],
  preview: {
    select: {
      quote: 'quote',
    },
    prepare(selection) {
      const { quote } = selection;

      return {
        title: quote,
      };
    },
  },
};
