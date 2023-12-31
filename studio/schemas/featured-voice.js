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
      name: 'credentials',
      title: 'Credentials',
      description:
        "What this person does. Ex. 'Senior director, brand marketing & partnerships, sierra club'",
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      description:
        'This will be used as an author bio on any associated articles',
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
    {
      name: 'quotes',
      title: 'Quotes',
      description:
        'All of the quotes from this individual that will show up when their profile is selected on the featured voices page',
      type: 'array',
      of: [{ type: 'featuredVoiceQuote' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      credentials: 'credentials',
      portraitImageUrl: 'portraitImage.asset.url',
    },
    prepare(selection) {
      const { name, credentials, portraitImageUrl } = selection;

      return {
        title: name,
        subtitle: credentials,
        media: <CharacterProfilePreview url={portraitImageUrl} />,
      };
    },
  },
};
