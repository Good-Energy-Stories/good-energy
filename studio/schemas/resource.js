import React from 'react';
import { BsFillLightbulbFill as icon } from 'react-icons/bs';

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
      description: "What page should this resource's 'Read More' button go to?",
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Playbook', value: '/playbook' },
          { title: 'Library of Experts', value: '/about/library-of-experts' },
          { title: 'About', value: '/about' },
          { title: 'Consulting Practice', value: '/about/consulting' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      description:
        'A featured resource will have a more prominent card than one with a standard style.',
      options: {
        layout: 'radio',
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Standard', value: 'standard' },
        ],
      },
    },
    {
      title: 'Resource Hero Image',
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
  ],
};
