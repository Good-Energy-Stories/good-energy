import { PortableTextReactComponents } from '@portabletext/react';
import FootnoteNumber from './FootnoteNumber';
import Link from 'next/link';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../lib/framer/framer-animations';

const PortableTextSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body">{children}</p>,
  },
  list: (props) => {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          ...FRAMER_TRANSITION_FASTEASE,
          staggerChildren: 0.4,
        },
      },
    };
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { children } = props;

    return (
      <motion.ul
        ref={ref}
        className="yo"
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {children}
      </motion.ul>
    );
  },

  listItem: {
    bullet: (props) => {
      const item = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 },
      };
      const { children } = props;
      return (
        <motion.li
          className="body"
          variants={item}
          transition={{ duration: 0.7, type: 'tween', ease: 'easeInOut' }}
        >
          {children}
        </motion.li>
      );
    },
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
