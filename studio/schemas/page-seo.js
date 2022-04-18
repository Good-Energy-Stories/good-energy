import React from 'react';
import { BsFillLightbulbFill as icon } from 'react-icons/bs';

export default {
  name: 'pageSeo',
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
      name: 'title',
      title: 'Title',
      description: 'Title of this page',
      type: 'string',
      fieldset: 'metadata',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of this page',
      fieldset: 'metadata',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fieldset: 'metadata',
      options: {
        hotspot: true,
      },
    },
  ],
};
