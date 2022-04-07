import React from 'react';
import { CharacterProfilePreview } from '../components';
import { GiBookshelf as icon } from 'react-icons/gi';
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "The individual's name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorBio',
      title: 'Author Bio',
      description:
        'The author bio that will show up with their name at the bottom of any associated articles',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Portrait Image',
      name: 'portraitImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
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
  ],
  preview: {
    select: {
      name: 'name',
      portraitImageUrl: 'portraitImage.asset.url',
    },
    prepare(selection) {
      const { name, credentials, portraitImageUrl } = selection;

      return {
        title: name,
        media: <CharacterProfilePreview url={portraitImageUrl} />,
      };
    },
  },
};
