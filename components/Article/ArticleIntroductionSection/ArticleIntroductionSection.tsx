import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { Content } from './';
import { RefObject } from 'react';
import { SectionRefLookup } from '../';
const { className, styles } = css.resolve`
  div {
    grid-column: 2/5;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

const ArticleIntroductionSection = ({
  data,
  index,
}: {
  data: any;
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Content data={data} index={index} isIntroduction />
      {styles}
    </motion.div>
  );
};

export default ArticleIntroductionSection;
