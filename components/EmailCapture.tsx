import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Banner, Title, Lede, Tags } from './ArticleLink';
import Link from 'next/link';

const { className, styles } = css.resolve`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1.25rem;
    grid-column: span 4;
    background-color: var(--black);
    position: relative;
    padding: 5rem 2.5rem;
    border-top: 4px solid var(--blueFour);
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

const EmailCapture = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        <div className="title">Some kind of catchy cta</div>
        <div className="subtitle">
          Stay in the loop by giving us your email address, you know you want
          to.
        </div>
        <div className="input-row">
          <input placeholder="NAME@EXAMPLE.COM" type="text" />
          <button type="button">→</button>
        </div>
      </div>
      <img src="/fern-small.png" />

      <style jsx>{`
        .title {
          font-family: var(--flexa);
          font-size: 64px;
          font-style: normal;
          font-weight: 800;
          line-height: 62px;
          letter-spacing: -0.02em;
          text-align: left;
          color: var(--white);
          text-transform: uppercase;
          font-variation-settings: 'wght' 700, 'wdth' 40;

          margin-bottom: 0.625rem;
        }
        .subtitle {
          font-family: var(--flexa);
          font-size: 24px;
          font-style: normal;
          font-weight: 429;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
          color: var(--white);
          margin-bottom: 1.25rem;
        }
        .layout {
          max-width: 80%;
        }
        .article-link {
        }
        .input-row {
          display: flex;
          width: 100%;
          position: relative;
        }
        button {
          border: none;
          padding: 15px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 28px;

          cursor: pointer;
          background-color: var(--pink);
        }
        img {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
        input[type='text'] {
          border: 0;
          border-radius: 0;
          padding: 1.25rem;
          text-transform: uppercase;
          color: var(--blueThree);
          font-size: 18px;
          line-height: 22px;
          font-family: var(--flexa-mono);
          font-weight: 500;
          min-width: 400px;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default EmailCapture;
