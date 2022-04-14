import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'featuredVoiceQuote',
  title: 'Featured Voice Quote',
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
      description:
        'Do not include the quotation marks here as the site will add them to all article quotes.',
      type: 'string',
    },
    {
      name: 'isFromArticle',
      title: 'Is This Quote From an Article',
      description:
        'If this quote comes from an article, you can link the article here and the quote will include a link to that article. If not, you can still optionally include attribution for the quote',
      type: 'boolean',
    },

    {
      name: 'attribution',
      title: 'Attribution',
      description:
        'What this quote is referring to or when this individual said it. This is an optional field',
      type: 'string',
      hidden: ({ parent }) => {
        return parent?.isFromArticle === undefined || parent?.isFromArticle;
      },
    },
    {
      name: 'article',
      title: 'Article Quote is From (if any)',
      type: 'reference',
      to: [{ type: 'article' }],
      hidden: ({ parent }) => parent?.isFromArticle !== true,
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
