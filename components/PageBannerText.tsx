import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';
import CloseButtonIcon from '../public/close-button.svg';
import ListArrowIcon from '../public/list-arrow.svg';
import Link from 'next/link';
import { Search } from '.';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { isMobile } from 'react-device-detect';
import useBannerHeight from '../utils/hooks/useBannerHeight';

function getStyles() {
  return css.resolve`
    div {
      color: var(--white);
      padding-top: 4px;
    }
    @media only screen and (max-width: 1080px) {
      div {
        font-size: 14px;
        line-height: 16px;
      }
    }
    @media only screen and (max-width: 768px) {
      div {
        font-size: 14px;
        line-height: 16px;
      }
    }
  `;
}
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const PageBannerText = ({ copy }: { copy: any }) => {
  const { className, styles } = getStyles();
  return (
    <>
      <motion.div
        className={className}
        variants={variants}
        transition={{
          ...FRAMER_TRANSITION_EASEOUT,
          delay: FRAMER_TRANSITION_EASEOUT.duration + 0.5,
        }}
        initial={'out'}
        animate={'in'}
      >
        <PortableText value={copy} />
        {styles}
      </motion.div>
    </>
  );
};

export default PageBannerText;
