import React from 'react';
import { BsFillLightbulbFill as icon } from 'react-icons/bs';

export default {
  name: 'seo',
  title: 'Seo',
  type: 'object',
  icon,
  fieldsets: [
    {
      name: 'metadata',
      title: 'Metadata',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'keywords',
      title: 'Keywords',
      description: 'Separate these with commas',
      type: 'string',
      fieldset: 'metadata',
    },
    {
      name: 'synonyms',
      title: 'Synonyms',
      type: 'string',
      fieldset: 'metadata',
    },
  ],
};
