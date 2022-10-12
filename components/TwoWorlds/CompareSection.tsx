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
import { ActiveSide } from '../../pages/playbook/two-worlds';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;

    margin-bottom: 2.5rem;
    padding: 0 1.25rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

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
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const MotionIllustration = motion(Illustration);

const CompareSection = ({
  data,
  index,
  activeSide,
}: {
  data: any;
  index: number;
  activeSide: ActiveSide;
}) => {
  const {
    _key,
    title,
    body,
    year,
    rise,
    collapse,
    collapseIllustration,
    riseIllustration,
    initialSection,
  } = data;

  const activeIllustration =
    activeSide === ActiveSide.collapse
      ? collapseIllustration
      : riseIllustration;
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <MotionIllustration
          key={activeSide}
          transition={FRAMER_TRANSITION_EASEOUT}
          initial={{
            x: activeSide === ActiveSide.collapse ? -100 : 100,
            scale: 0.9,
          }}
          animate={{ x: 0, scale: 1 }}
          exit={{
            x: activeSide === ActiveSide.collapse ? 100 : -100,
            scale: 0.9,
          }}
          data={activeIllustration}
        />
      </AnimatePresence>
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

        {styles}
      </motion.div>
    </>
  );
};

export default CompareSection;
