import { FaQuoteLeft as icon } from 'react-icons/fa';

export default {
  name: 'playbookQuote',
  title: 'Quote',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'string',
    },
    {
      title: 'Attribution',
      name: 'attribution',
      type: 'string',
      hidden: ({ parent }) => parent?.shouldLinkToAboutPage === true,
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',

      options: {
        layout: 'radio',
        list: [
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
      },
    },
    {
      name: 'linkNote',
      type: 'note',
      options: {
        headline: 'Note',
        message:
          'Enabling the toggle below will replace the attribution of a quote with a button that says "About Good Energy" that will link to the about page. You may want to use this if you are using a quote you think sums up Good Energy particularly well as a lead in to read more.',
        tone: 'caution',
      },
    },
    {
      title: 'Should Link To About Page',
      name: 'shouldLinkToAboutPage',
      type: 'boolean',
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
