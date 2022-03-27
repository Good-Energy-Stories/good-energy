import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { SectionTOC } from './TOC';

const { className, styles } = css.resolve`
  div {
    cursor: pointer;
    margin-bottom: 0.65rem;
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

const Section = ({
  title,
  scrollIntoView,
}: {
  title: string;
  scrollIntoView: () => void;
}) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
      onClick={scrollIntoView}
    >
      <span className="nav-link-medium">{title}</span>

      {styles}
    </motion.div>
  );
};

export default Section;
