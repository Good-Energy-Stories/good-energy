import React from 'react';
import { BsShuffle } from 'react-icons/bs';
export default {
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  icon: BsShuffle,
  fields: [
    {
      title: 'From (slug)',
      name: 'from',
      type: 'string',
      description: (
        <>
          Do not include the full domain or leading slash. For example:{' '}
          <code>old-page</code>
        </>
      ),
    },
    {
      title: 'To (slug)',
      name: 'to',
      type: 'string',
      description: (
        <>
          Do not include the full domain or leading slash. For example:{' '}
          <code>new-page</code>
        </>
      ),
    },
    {
      title: 'Is this an external url?',
      name: 'isExternal',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is this a permanent redirect (301)?',
      name: 'isPermanent',
      type: 'boolean',
    },
  ],
  initialValue: {
    isPermanent: true,
  },
  preview: {
    select: {
      to: 'to',
      from: 'from',
      isPermanent: 'isPermanent',
    },
    prepare({ from, to, isPermanent }) {
      return {
        title: from && to ? `(${from}) → (${to})` : 'New Redirect',
        subtitle: isPermanent ? '301' : '302',
      };
    },
  },
};
