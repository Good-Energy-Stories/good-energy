import React from 'react';
import { BsFillStarFill as icon } from 'react-icons/bs';

export default {
  name: 'articleStoryPossibility',
  title: 'Article Story Possibility',
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
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'initialState',
      title: 'Should be expanded by default?',
      description:
        'Story possibilities are collapsible. This toggle will determine if the story possibility is expanded or collapsed in its default state. Defaults to collapsed.',
      type: 'boolean',
    },
  ],
};
