import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key, useState } from 'react';
import { IndicatorDot, QuoteType } from './';
const { className, styles } = css.resolve`
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.3125rem 0;
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

const IndicatorDotRow = ({
  setActiveQuoteIndex,
  activeQuoteIndex,
  quotes,
}: {
  setActiveQuoteIndex: (i: number) => void;
  activeQuoteIndex: Number;
  quotes: QuoteType[];
}) => {
  return (
    <div className={className}>
      {quotes.map((q, i) => (
        <IndicatorDot
          key={JSON.stringify(q)}
          onClick={() => setActiveQuoteIndex(i)}
          active={i === activeQuoteIndex}
        />
      ))}
      {styles}
    </div>
  );
};

export default IndicatorDotRow;
