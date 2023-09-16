import { FaPeopleCarry as icon } from 'react-icons/fa';
export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      description:
        'Providing a link to a partners website will make clicking on their logo link there.',
      type: 'url',
    },
    {
      title: 'Logo',
      name: 'logo',
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
      title: 'Alt Logo (For Press Hero section only)',
      description:
        'For example, a different color treatment with transparent background',
      name: 'altLogo',
      type: 'image',
    },
  ],
};
