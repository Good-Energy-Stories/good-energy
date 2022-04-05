import React from 'react';
import { BsCircleFill as icon } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { GiFootprint } from 'react-icons/gi';

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
      validation: (Rule) => Rule.required(),
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
      title: 'Introduction',
      name: 'introduction',
      description:
        'This is the introductory of the article. Remember that you can put multiple paragraphs inside of one section. Leaving this section blank will mean the article will begin with the first item in the article body section below.',

      type: 'array',
      of: [
        { type: 'articleIntroductionSection' },
        { type: 'articleQuote' },
        { type: 'articleBlockQuote' },
      ],
    },
    {
      title: 'Body',
      name: 'body',
      description: 'This is the contents of the article itself.',
      type: 'array',
      of: [
        { type: 'articleSection' },
        { type: 'articleQuote' },
        { type: 'articleBlockQuote' },
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
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'expertProfile' },
          ],
        },
      ],
    },
  ],
};
