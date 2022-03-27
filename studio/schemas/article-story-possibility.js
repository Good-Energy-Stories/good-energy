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
      of: [{ type: 'block' }],
    },
  ],
};
