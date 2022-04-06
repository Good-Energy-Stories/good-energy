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
    max-width: 100%;
    margin-top: -${PLAYBOOK_NAV_HEIGHT}px;
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

const Banner = ({ image }: { image: any }) => {
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
      <img alt={image?.caption} src={imageUrlFor(image).width(1080).url()} />

      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Banner;