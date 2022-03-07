import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    background-color: var(--greyBlue);
    padding: 0.625rem 1.25rem;
    max-width: 765px;
    border-top: 4px solid var(--black);
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
  attribution,
}: {
  quote: String;
  attribution: String;
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
      <div className="layout tease-quote-big">
        <span className="open-quote">{`“`}</span>
        <span>
          <div className="quote">
            <span className="quote-body">{`${quote}`}</span>
            <span className="close-quote">{`”`}</span>
          </div>
          <div className="attribution quote-attribution">{attribution}</div>
        </span>
      </div>

      <style jsx>{`
        .open-quote {
        }
        .layout {
          display: flex;
          padding: 0.625rem;
        }
        .quote {
          margin-bottom: 0.625rem;
          position: relative;
        }
        .attribution {
          display: block;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Quote;
