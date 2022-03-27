import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../../utils/imageUrlFor';

const { className, styles } = css.resolve`
  div {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    overflow: hidden;
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

const Portrait = ({ image }: { image: any }) => {
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
          transform: translateY(-10%);
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Portrait;
