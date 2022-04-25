import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import toPlainText from '../utils/toPlainText';

export default {
  name: 'articleSection',
  title: 'Article Section',
  type: 'object',
  icon,
  fields: [
    {
      name: 'articleSectionNote',
      type: 'note',
      options: {
        headline: 'Article Section Note',
        message:
          'If you give this section a title, this title will appear in the sticky article table of contents on the articles left side.',
      },
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Section title if applicable',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
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
              {
                name: 'footnote',
                type: 'object',
                title: 'Footnote',
                icon: GiFootprint,
                fields: [
                  {
                    name: 'number',
                    type: 'string',
                  },
                  {
                    name: 'text',
                    type: 'array',
                    of: [{ type: 'block' }],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'includeSpotIllustration',
      title: 'Include Spot Illustration',
      description: 'If this section has a spot illustration or not',
      type: 'boolean',
    },
    {
      title: 'Illustration Position',
      name: 'illustrationPosition',
      description:
        'Where the illustration should be placed. Inline means it will be placed under the text and will be larger. To the side is typically better for spot illustrations.',
      type: 'string',

      options: {
        layout: 'radio',
        list: [
          { title: 'To the Side', value: 'side' },
          { title: 'Inline', value: 'inline' },
        ],
      },
      hidden: ({ parent }) => parent?.includeSpotIllustration !== true,
    },

    {
      title: 'Spot Illustration',
      name: 'spotIllustration',
      hidden: ({ parent }) => parent?.includeSpotIllustration !== true,
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
  preview: {
    select: {
      title: 'title',
      body: 'body',
      spotIllustrationUrl: 'spotIllustration.asset.url',
    },
    prepare(selection) {
      const { title, body, spotIllustration } = selection;
      return {
        title: title ?? toPlainText(body) ?? 'Article Section',
        media: spotIllustration ?? icon,
      };
    },
  },
};
