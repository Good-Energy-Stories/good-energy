import React from 'react';
import { CharacterProfilePreview } from '../components';
import { BsPersonFill as icon } from 'react-icons/bs';

export default {
  name: 'characterProfilesTeaseSection',
  title: 'Character Profiles Tease Section',
  type: 'document',
  icon,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: "Ex. 'Start Here'",
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Character Profiles'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Information about the character profiles',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
      description:
        'This is where you change which character profiles to surface and what order they should appear in.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'characterProfile' }, { type: 'expertProfile' }],
        },
      ],
    },
  ],
};
