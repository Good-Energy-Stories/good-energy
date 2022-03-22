import { FaQuoteLeft as icon } from 'react-icons/fa';
const ARTICLE = 'article';
const QUOTES = 'quotes';
export default {
  name: 'playbookCard',
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: ARTICLE },
          { title: 'Quotes', value: QUOTES },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Article',
      name: 'article',
      type: 'reference',
      to: [{ type: 'article' }],
      hidden: ({ parent }) => parent?.type !== ARTICLE,
    },
    {
      title: 'Quotes',
      name: 'quoteCollection',
      type: 'reference',
      to: [{ type: 'quoteCollection' }],
      hidden: ({ parent }) => parent?.type !== QUOTES,
    },
  ],
  preview: {
    select: {
      articleTitle: 'article.title',
      articleAuthor: 'article.author',
      articleHeroImage: 'article.heroImage',
      quoteCollectionTitle: 'quoteCollection.title',
      quoteCollectionQuotes: 'quoteCollection.quotes',
      type: 'type',
    },
    prepare(selection) {
      const {
        articleTitle,
        articleAuthor,
        articleHeroImage,
        quoteCollectionTitle,
        quoteCollectionQuotes,
        type,
      } = selection;
      let title, subtitle, media;
      if (type === ARTICLE) {
        title = articleTitle;
        subtitle = articleAuthor;
        media = articleHeroImage;
      }
      if (type === QUOTES) {
        title = quoteCollectionTitle;
        subtitle = `Collection of ${quoteCollectionQuotes.length} quote(s)`;
        media = icon;
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
