import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { RefObject } from 'react';
import PortableTextSerializer from '../PortableTextSerializer';
import { PortableText } from '@portabletext/react';
import { Section } from '.';
import { useState } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import { isMobile } from 'react-device-detect';

const { className, styles } = css.resolve`
  div {
    grid-column: 2/3;
    margin-bottom: 2.5rem;
    padding: 0 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/3;
      grid-row-start: 1;
      margin-bottom: 0;
      padding: 0;
    }
  }
`;

const variants = {
  active: {
    opacity: 1,
    transform: isMobile ? 'matrix(1,0,0,1,0,0)' : 'matrix(1,0,0,1,-200,0)',
    filter: 'blur(0px)',
  },
  inactive: {
    opacity: 0.4,
    transform: isMobile
      ? 'matrix(0.90,0.00,0.00,0.90,-100,0)'
      : 'matrix(0.80,0.00,0.00,0.80,-50,0)',
    filter: 'blur(4px)',
  },
};

const Rise = ({
  year,
  data,
  active,
}: {
  year: string;
  data: any;
  active: boolean;
}) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      animate={active ? 'active' : 'inactive'}
      variants={variants}
      className={className}
    >
      <h3>Rise</h3>
      <h1>{year}</h1>
      <div className="rise section">
        {data.map((c, i) => (
          <Section key={i} index={i} data={c} />
        ))}
      </div>

      <style jsx>{`
        h1 {
          margin: 1.25rem 0;
        }
        h3 {
          margin-bottom: 2.5rem;
        }
        .section {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Rise;
