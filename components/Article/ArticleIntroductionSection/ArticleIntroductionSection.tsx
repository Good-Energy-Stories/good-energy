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
    grid-column: 2/4;
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
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
  includeDropCap = false,
}: {
  data: any;
  index: number;
  includeDropCap?: boolean;
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
      <Content data={data} index={index} includeDropCap={includeDropCap} />
      {styles}
    </motion.div>
  );
};

export default ArticleIntroductionSection;
