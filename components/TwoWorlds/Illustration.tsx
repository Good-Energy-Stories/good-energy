import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { PLAYBOOK_NAV_HEIGHT } from '../';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;

    max-height: 100vh;

    padding: 0 2.5rem;
    margin: 2.5rem 0;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0 1.25rem;
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

const Illustration = ({ data }: { data: any }) => {
  if (!data) return null;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <img alt={data?.caption} src={imageUrlFor(data).width(1000).url()} />

      <style jsx>{`
        img {
          min-width: 100%;
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Illustration;
