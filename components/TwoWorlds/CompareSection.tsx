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
import Collapse from './Collapse';
import Rise from './Rise';
import SeeRiseButton from './SeeRiseButton';
import SeeCollapseButton from './SeeCollapseButton';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    margin-bottom: 2.5rem;
    padding: 0 1.25rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
      margin-bottom: 0;
      padding-top: 2.5rem;
      overflow: hidden;
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

export enum ActiveSide {
  rise = 'rise',
  collapse = 'collapse',
}

const CompareSection = ({ data, index }: { data: any; index: number }) => {
  const { _key, title, body, year, rise, collapse, initialSection } = data;

  const [activeSide, setActiveSide] = useState(
    initialSection ?? ActiveSide.rise,
  );

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Collapse
        year={year}
        data={collapse}
        active={activeSide === ActiveSide.collapse}
      />
      <Rise year={year} data={rise} active={activeSide === ActiveSide.rise} />
      <SeeRiseButton
        onClick={() => setActiveSide(ActiveSide.rise)}
        active={activeSide === ActiveSide.collapse}
      />
      <SeeCollapseButton
        onClick={() => setActiveSide(ActiveSide.collapse)}
        active={activeSide === ActiveSide.rise}
      />
      {styles}
    </motion.div>
  );
};

export default CompareSection;
