import React from 'react';
import { BsFillLightbulbFill as icon } from 'react-icons/bs';

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "Ex. 'Consulting'",
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      description:
        "Label on the CTA button that will link to the resource. Ex. 'Work With Us'",
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
          { title: 'About', value: '/about/story-of-us' },
          { title: 'Consulting Practice', value: '/about/consulting' },
          { title: 'Research', value: '/offerings/research' },
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
  ],
};
