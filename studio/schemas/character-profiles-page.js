import React from 'react';
import { CharacterProfilePreview } from '../components';
import { BsPersonFill as icon } from 'react-icons/bs';

export default {
  name: 'characterProfilesPage',
  title: 'Character Profiles Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Character Profiles'",
    },
    {
      name: 'description',
      title: 'Description',
      description: "Information about the character profile's page",
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Character Profiles',
      name: 'characterProfiles',
      description:
        'This is where you change which character profiles to surface and what order they should appear in.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'expertProfile' },
          ],
        },
      ],
    },

    {
      title: 'Related',
      name: 'related',
      description:
        'You can add any number of related articles or character profiles here.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'expertProfile' },
          ],
        },
      ],
    },
  ],
};
