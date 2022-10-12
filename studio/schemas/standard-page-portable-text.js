import React from 'react';

import { BiLink } from 'react-icons/bi';
import { MdOutlineSubject as icon } from 'react-icons/md';

import { CgInternal } from 'react-icons/cg';

const highlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>;
const highlightRender = (props) => (
  <span style={{ color: '#2fbdf4' }}>{props.children}</span>
);
export default {
  name: 'standardPagePortableText',
  icon,
  title: 'Written Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
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
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: CgInternal,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'article' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
