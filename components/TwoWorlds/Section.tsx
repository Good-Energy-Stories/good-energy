import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { RefObject } from 'react';
import PortableTextSerializer from '../PortableTextSerializer';
import { PortableText } from '@portabletext/react';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
      margin-bottom: 0;
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ArticleSection = ({ data, index }: { data: any; index: number }) => {
  const { _key, title, body } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      {title && <h3>{title}</h3>}
      <PortableText value={body} components={PortableTextSerializer} />

      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;
