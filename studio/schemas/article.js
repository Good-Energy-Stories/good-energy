import React from 'react';
import { BsCircleFill as icon } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
export default {
  name: 'article',
  title: 'Article',
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
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'lede',
      title: 'Lede',
      type: 'string',
    },
    {
      name: 'byline',
      title: 'Byline',
      type: 'string',
    },
    {
      title: 'Project Hero Image',
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
      name: 'introduction',
      title: 'Introduction',
      description:
        "These are the introductory paragraphs of the article that aren't contained in a section.",
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
              {
                title: 'Quote',
                name: 'quote',
                type: 'object',
                icon: FaQuoteLeft,
                fields: [
                  {
                    title: 'Attribution',
                    name: 'attribution',
                    type: 'string',
                  },
                ],
              },
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                icon: BiLink,
                fields: [
                  {
                    title: 'URL',
                    name: 'url',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Body',
      name: 'body',
      description:
        'This is the contents of the article itself. You can lay it out here in sections.',
      type: 'array',
      of: [
        { type: 'articleSection' },
        { type: 'articleQuote' },
        { type: 'articleStoryPossibility' },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Related',
      name: 'related',
      description:
        'You can add any number of related articles or character profiles here.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }, { type: 'characterProfile' }],
        },
      ],
    },
  ],
};
