import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    grid-column: 1/3;
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <span className="body-bold">{children}</span>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="body-link"
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
  },
};

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Content = ({ data }: { data: any }) => {
  const { body } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <PortableText value={body} components={components} />

      {styles}
    </motion.div>
  );
};

export default Content;
