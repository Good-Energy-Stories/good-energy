import React from 'react';
import { CharacterProfilePreview } from '../components';
import { GiBookshelf as icon } from 'react-icons/gi';
export default {
  name: 'featuredVoice',
  title: 'Featured Voice',
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
      name: 'shortBio',
      title: 'Short Bio',
      validation: (Rule) => Rule.required(),
      type: 'string',
      description: "A short bio for this person's",
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
