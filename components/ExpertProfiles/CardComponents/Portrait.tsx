import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../../utils/imageUrlFor';

export enum PortraitSizes {
  medium = '150',
  large = '180',
  extraLarge = '250',
  fill = '100%',
}

const { className, styles } = css.resolve`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

const Portrait = ({
  image,
  size = PortraitSizes.medium,
}: {
  image: any;
  size?: PortraitSizes;
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
      <div className="frame">
        <img alt={image?.caption} src={imageUrlFor(image).url()} />
      </div>
      <style jsx>{`
        .frame {
          width: ${size}px;

          display: flex;
          align-items: center;
        }
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
