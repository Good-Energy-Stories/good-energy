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
      name: 'lede',
      title: 'Lede',
      type: 'string',
      description:
        'This is the text that will show up on the card if this page is linked on the homa page.',
    },
    {
      name: 'cardStyle',
      title: 'Card Style',
      description:
        'Choosing standard means that whenever this page is linked to on the home page it will appear as a standard profile card. Choosing carousel means that it will cycle through random character profile spotlights. Defaults to standard.',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Carousel', value: 'carousel' },
        ],
      },
    },
    {
      title: 'Character Profiles Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Information about the character profiles page',
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
