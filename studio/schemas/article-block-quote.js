import { FaQuoteLeft as icon } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { GrBlockQuote } from 'react-icons/gr';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'articleBlockQuote',
  title: 'Block Quote',
  type: 'object',
  icon: GrBlockQuote,
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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
              {
                name: 'footnote',
                type: 'object',
                title: 'Footnote',
                icon: GiFootprint,
                fields: [
                  {
                    name: 'text',
                    type: 'array',
                    of: [{ type: 'block' }],
                  },
                ],
              },
            ],
          },
        },
      ],
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
      attribution: 'attribution',
    },
    prepare(selection) {
      const { quote, attribution } = selection;

      return {
        title: toPlainText(quote) ?? attribution ?? 'Block quote',
      };
    },
  },
};
