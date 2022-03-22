import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'playbookHome',
  title: 'Playbook Home',
  type: 'document',
  icon,
  fieldsets: [
    {
      title: 'Masthead',
      name: 'masthead',
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      title: 'Left Column',
      name: 'leftColumn',
      fieldset: 'masthead',
      type: 'array',
      of: [
        {
          type: 'playbookCard',
        },
      ],
    },
    {
      title: 'Featured Article',
      name: 'featuredArticle',
      fieldset: 'masthead',
      type: 'playbookCard',
    },
    {
      title: 'Right Column',
      name: 'rightColumn',
      fieldset: 'masthead',
      type: 'array',
      of: [
        {
          type: 'playbookCard',
        },
      ],
    },
  ],
  preview: {},
};
