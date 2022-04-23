import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../../utils/imageUrlFor';

const { className, styles } = css.resolve`
  div {
    grid-column: 3/4;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      margin: 0 1.25rem;
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

const SpotIllustration = ({ image }: { image: any }) => {
  if (!image) return null;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <img alt={image?.caption} src={imageUrlFor(image).url()} />

      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default SpotIllustration;
