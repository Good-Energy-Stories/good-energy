import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import PortableTextSerializer from '../../../PortableTextSerializer';

const { className, styles } = css.resolve`
  div {
    grid-column: 2/4;
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

const Description = ({ description }: { description: any }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <PortableText value={description} components={PortableTextSerializer} />

      {styles}
    </motion.div>
  );
};

export default Description;
