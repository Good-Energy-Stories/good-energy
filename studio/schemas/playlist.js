import React from 'react';
import { FaRegListAlt as icon } from 'react-icons/fa';

export default {
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Characters'",
    },
    {
      name: 'byline',
      title: 'Byline',
      type: 'string',
      description: "Ex. 'The Good Energy Team'",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Playlist',
      name: 'playlist',
      description:
        'You can add any number of articles or character profiles to a playlist.',
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
      title: 'title',
      byline: 'byline',
    },
    prepare(selection) {
      const { title, byline } = selection;

      return {
        title,
        subtitle: byline,
      };
    },
  },
};
