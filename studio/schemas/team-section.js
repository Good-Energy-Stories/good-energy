import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Team'",
      description: 'This is optional',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Some optional information about the team',
      type: 'standardPagePortableText',
    },
    {
      title: 'Image',
      name: 'image',
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
      title: 'Team Members',
      name: 'teamMembers',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title ?? 'Team Section',
      };
    },
  },
};
