import React from 'react';
import { CharacterProfilePreview } from '../components';
import { RiTeamFill as icon } from 'react-icons/ri';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'twoWorldsArticle',
  title: 'Two Worlds Article',
  type: 'document',
  icon,
  fields: [
    {
      name: 'smallTitle',
      title: 'Small Title',
      type: 'string',
      description: "Ex. 'Our Possible Futures'",
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Maria's Two Worlds'",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
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
      title: 'Author',
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'author' },
            { type: 'expertProfile' },
            { type: 'featuredVoice' },
          ],
        },
      ],
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'content',
      title: 'Content',

      type: 'array',
      of: [
        {
          title: 'Illustration',
          name: 'illustration',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'This will be used as the alt text for the image',
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
        { type: 'twoWorldsSection' },
        { type: 'twoWorldsCompareSection' },
      ],
    },
    {
      title: 'Next Up',
      name: 'nextUp',
      description:
        'The next article in the playbook that you want to see appear after this article. This is used for the "Next Up" section on the article page.',
      type: 'reference',
      to: [{ type: 'article' }],
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
