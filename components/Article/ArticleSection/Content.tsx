import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableTextSerializer } from '../../';
import { PortableText } from '@portabletext/react';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    grid-column: 2/4;
    margin-bottom: 0rem;
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

const Content = ({ data }: { data: any }) => {
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
      {title && <h3>{title}</h3>}
      <PortableText value={body} components={PortableTextSerializer} />

      {styles}
    </motion.div>
  );
};

export default Content;
