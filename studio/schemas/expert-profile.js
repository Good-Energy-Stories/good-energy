import React from 'react';
import { CharacterProfilePreview } from '../components';
import { GiBookshelf as icon } from 'react-icons/gi';
export default {
  name: 'expertProfile',
  title: 'Expert Profile',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Portrait Image',
      name: 'portraitImage',
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
  preview: {
    select: {
      name: 'name',
      shortBio: 'shortBio',
      portraitImageUrl: 'portraitImage.asset.url',
    },
    prepare(selection) {
      const { name, shortBio, portraitImageUrl } = selection;

      return {
        title: name,
        subtitle: shortBio,
        media: <CharacterProfilePreview url={portraitImageUrl} />,
      };
    },
  },
};
