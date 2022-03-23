import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    grid-column: 2/4;
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
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
  const { title, body } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h4>{title}</h4>
      <BlockContent blocks={body} />
      <style jsx>{`
        .open-quote {
        }
        h3 {
          margin: 0.625rem auto;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;
