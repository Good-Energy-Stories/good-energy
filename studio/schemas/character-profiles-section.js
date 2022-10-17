import React from 'react';
import { CharacterProfilePreview } from '../components';
import { BsPersonFill as icon } from 'react-icons/bs';

export default {
  name: 'characterProfilesSection',
  title: 'Character Profiles Section',
  type: 'document',
  icon,
  fields: [
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
  preview: {
    prepare(selection) {
      return {
        title: 'Character Profiles Section',
      };
    },
  },
};
