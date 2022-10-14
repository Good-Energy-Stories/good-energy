import React from 'react';
import {
  BsFillLightbulbFill as icon,
  BsFillImageFill,
  BsFillCameraVideoFill,
} from 'react-icons/bs';

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
          { title: 'Consulting Practice', value: '/offerings/consulting' },
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
      title: 'Media',
      name: 'media',
      type: 'array',
      validation: (Rule) => Rule.max(1).warning('Can only have one media item'),
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          icon: BsFillImageFill,
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
          title: 'Video',
          name: 'video',
          type: 'object',
          icon: BsFillCameraVideoFill,
          fields: [
            {
              title: 'Video',
              name: 'video',
              type: 'file',
              validation: (Rule) => Rule.required(),
              options: { accept: 'video/*' },
            },
            {
              title: 'Thumbail',
              name: 'thumbnail',
              type: 'image',
              validation: (Rule) => Rule.required(),
            },
            { title: 'Caption', name: 'caption', type: 'string' },
          ],
        },
      ],
    },
  ],
};
