import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'pageSeo',
    },
    {
      title: 'Hero Image',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Team'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the team',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Featured Team Members',
      name: 'featuredTeamMembers',
      description:
        'This is where you select the order of the featured team members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
    {
      title: 'Team Members',
      name: 'teamMembers',
      description:
        'This is where you select the order of the rest of the team members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
    {
      title: 'Board Members',
      name: 'boardMembers',
      description: 'This is where you select the order of the board members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
  ],
  preview: {},
};
