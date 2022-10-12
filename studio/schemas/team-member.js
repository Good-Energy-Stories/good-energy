import React from 'react';
import { CharacterProfilePreview } from '../components';
import { RiTeamFill as icon } from 'react-icons/ri';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "The individual's name",
    },
    {
      name: 'pronouns',
      title: 'Prounouns',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "The individual's professional title",
    },
    {
      name: 'links',
      title: 'Links',
      description: 'Any relevant links associated with the individuals',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'bio',
      title: 'Bio',
      description:
        "The actual bio that will appear on the individual's page in the library of experts",
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
      description:
        'You can use this for a company logo too if this is an organization document',
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
      bio: 'bio',
      portraitImageUrl: 'portraitImage.asset.url',
    },
    prepare(selection) {
      const { name, bio, portraitImageUrl } = selection;

      return {
        title: name,
        subtitle: toPlainText(bio),
        media: <CharacterProfilePreview url={portraitImageUrl} />,
      };
    },
  },
};
