import { FaQuoteLeft as icon } from 'react-icons/fa';
export default {
  name: 'quoteCollection',
  title: 'Quote Collection',
  type: 'document',
  icon,
  fields: [
    {
      name: 'quoteCollectionNote',
      type: 'note',
      options: {
        headline: 'Quote Collection Note',
        message:
          'Quote collections can be used on the playbook home page. You can add them here as their own documents so that they can be reusable when laying out the page.',
      },
    },
    {
      name: 'title',
      title: 'Quote Collection Title',
      description:
        "Note: this is for internal bookeeping purposes only and won't show up on the site but leaving this blank means this collection will be titled 'Untitled'",
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
