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

export const BANNER_HEIGHT = 50;
export const BANNER_HEIGHT_MOBILE = 70;

const { className, styles } = css.resolve`
  div {
    width: calc(100% - 24px);
    height: ${BANNER_HEIGHT}px;
    background-color: var(--black);
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 12px;
  }

  @media only screen and (max-width: 768px) {
    div {
      top: 12px;
      padding: 0 1.25rem;
      height: ${BANNER_HEIGHT_MOBILE}px;
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

const PageBanner = ({ copy }: { copy: any }) => {
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        className={className}
      >
        <div className="label-medium">
          <PortableText value={copy} />
        </div>
        {styles}
        <style jsx>{`
          .label-medium {
            color: var(--white);
            padding-top: 4px;
          }
          @media only screen and (max-width: 1080px) {
            .label-medium {
              font-size: 14px;
              line-height: 16px;
            }
          }
          @media only screen and (max-width: 768px) {
            .label-medium {
              font-size: 14px;
              line-height: 16px;
            }
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default PageBanner;
