import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../../../utils/imageUrlFor';

const { className, styles } = css.resolve`
  div {
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
    <>
      <img alt={image?.caption} src={imageUrlFor(image).url()} />

      <style jsx>{`
        img {
          max-width: 100%;
        }
        @media only screen and (max-width: 768px) {
          img {
            min-width: 100%;
          }
        }
      `}</style>
      {styles}
    </>
  );
};

export default Banner;
