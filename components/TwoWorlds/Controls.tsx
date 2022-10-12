import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, motion } from 'framer-motion';
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
import Illustration from './Illustration';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEREASE,
} from '../../lib/framer/framer-animations';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    margin-bottom: 2.5rem;
    padding: 0 2.5rem;
    padding-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/-1;
      margin-bottom: 0;
      padding-top: 2.5rem;
      overflow: hidden;
    }
  }
`;

const variants = {
  in: {
    y: 0,
  },
  out: {
    y: 200,
  },
};

export enum ActiveSide {
  rise = 'rise',
  collapse = 'collapse',
}

const MotionIllustration = motion(Illustration);

const CompareSection = ({
  setActiveSide,
  activeSide,
  visible,
}: {
  setActiveSide: any;
  activeSide: ActiveSide;
  visible: boolean;
}) => {
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'out'}
        animate={visible ? 'in' : 'out'}
        variants={variants}
        className={className}
      >
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
    </>
  );
};

export default CompareSection;
