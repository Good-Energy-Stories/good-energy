import { BiLink } from 'react-icons/bi';
import { MdOutlineSubject as icon } from 'react-icons/md';

import { CgInternal } from 'react-icons/cg';

export default {
  name: 'standardPagePortableText',
  icon,
  title: 'Written Content',
  type: 'array',
  of: [
    {
      type: 'block',
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
