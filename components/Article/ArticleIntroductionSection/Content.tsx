import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { PortableTextSerializer } from '../..';
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
      <PortableText value={body} components={PortableTextSerializer} />

      {styles}
    </motion.div>
  );
};

export default Content;
