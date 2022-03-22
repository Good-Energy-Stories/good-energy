import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import AnimatedUnderline from './AnimatedUnderline';
import Link from 'next/link';
import Url from 'next/link';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    background-color: var(--white);
    color: var(--black);
    min-width: 100%;
    position: relative;
    overflow: hidden;
    border-top: 4px solid var(--blueFour);
    grid-column: 1/-1;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column-gap: 0;
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

const Quote = ({
  quote,
  actionLabel,
  href,
}: {
  quote: string;
  actionLabel: string;
  href: string;
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
      <div className="layout mega-quote">
        <span className="open-quote">{`“`}</span>
        <span>
          <div className="quote">
            <span className="quote-body">{`${quote}`}</span>
            <span className="close-quote">{`”`}</span>
          </div>
          <div className="attribution capture-the-action">
            <Link href={href}>
              <a>
                {actionLabel}
                <span className="arrow">→</span>
                <AnimatedUnderline active />
              </a>
            </Link>
          </div>
        </span>
      </div>
      <div className="spot-illustration">
        <img src="/fern.png" />
      </div>
      <style jsx>{`
        .spot-illustration {
          max-width: 30vw;
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          display: flex;
          align-items: flex-end;
        }
        img {
          max-width: 100%;
        }
        .open-quote {
          display: inline-block;
        }
        .layout {
          display: flex;
          padding: 2.5rem;
        }
        .quote-body {
          color: var(--black) !important;
        }
        .quote {
          margin-bottom: 1.5rem;
          margin-right: 22vw;
        }
        .arrow {
          margin-left: 3px;
        }
        .attribution {
          display: inline-block;
          position: relative;
          color: var(--black) !important;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Quote;
