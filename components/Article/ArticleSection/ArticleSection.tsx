import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { Content } from './';
import SpotIllustration from './SpotIllustration';
const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    grid-column: 1/5;
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: var(--grid-col);
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
  const { includeSpotIllustration } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Content data={data} />
      {includeSpotIllustration && (
        <SpotIllustration image={data?.spotIllustration} />
      )}
      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;
