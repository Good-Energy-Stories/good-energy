import React from 'react';
import { CharacterProfilePreview } from '../components';
import { BsPersonFill as icon } from 'react-icons/bs';

export default {
  name: 'playlistsPage',
  title: 'Playlists Page',
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
      description: "Ex. 'Playlists'",
    },
    {
      name: 'lede',
      title: 'Lede',
      type: 'string',
      description:
        'This is the text that will show up on the card if this page is linked on the homa page.',
    },
    {
      title: 'Playlists Page Hero Image',
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
      description: 'Information about the playlist page',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Playlists',
      name: 'playlists',
      description:
        'This is where you change which playlists to surface and what order they should appear in.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'playlist' }],
        },
      ],
    },
  ],
};
