import React from 'react';
import { FaGripLines as icon } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';

export default {
  name: 'articleIntroductionSection',
  title: 'Article Introduction Section',
  type: 'object',
  icon,
  fields: [
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
  ],
};
