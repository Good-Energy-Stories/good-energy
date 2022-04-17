import React from 'react';
import { CharacterProfilePreview } from '../components';
import { RiTeamFill as icon } from 'react-icons/ri';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'whyClimateArticle',
  title: 'Why Climate Article',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Why Climate Stories?'",
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        "Ex. 'If facts and data were going to save us, we would’ve fixed this shit long ago.'",
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
        { type: 'whyClimateTextBlock' },
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
