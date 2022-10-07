import { PortableTextReactComponents } from '@portabletext/react';
import FootnoteNumber from './FootnoteNumber';
import Link from 'next/link';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../lib/framer/framer-animations';
import List from './PortableTextComponents/List/List';
import Bullet from './PortableTextComponents/ListItem/Bullet';

const PortableTextSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body">{children}</p>,
  },
  list: List,
  listItem: {
    bullet: Bullet,
  },
  marks: {
    highlight: ({ children }) => (
      <span style={{ color: 'var(--blueFour)' }}>{children}</span>
    ),
    strong: ({ children }) => <span className="body-bold">{children}</span>,
    internalLink: ({ value, children }) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return (
        <Link href={`/playbook/${href}`}>
          <a className="body-link">{children}</a>
        </Link>
      );
    },
    link: ({ value, children }) => {
      const target = (value?.url || value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="body-link"
          href={value?.url || value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
    footnote: ({ value, children }) => (
      <span className="body-footnote">
        {children}
        <FootnoteNumber number={value?.number} />
      </span>
    ),
  },
};

export default PortableTextSerializer;
