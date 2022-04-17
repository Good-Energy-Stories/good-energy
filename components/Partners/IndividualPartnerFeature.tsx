import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { BANNER_HEIGHT } from '../PageBanner';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import Card from './Card';

const { className, styles } = css.resolve`
  div {
    margin-top: 5rem;
    grid-column: 1/5;
    padding: 0 2.5rem;
    background-color: var(--blueFive);

    display: flex;
    justify-content: center;
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

const IndividualPartnerFeature = ({ data }: { data: any }) => {
  const { description, partner } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="container">
        <PortableText value={description} components={PortableTextSerializer} />
        <div className="logo">
          <Card data={partner} />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;

          max-width: 800px;
          text-align: center;
        }
        .logo {
          margin-top: -50px;
        }
        @media only screen and (max-width: 768px) {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default IndividualPartnerFeature;
