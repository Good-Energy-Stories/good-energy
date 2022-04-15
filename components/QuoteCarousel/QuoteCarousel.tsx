import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { AnimatePresence, motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key, useState } from 'react';
import { Quote, IndicatorDotRow, QuoteType } from './';
function getStyles(maxWidth) {
  return css.resolve`
    div {
      max-width: ${maxWidth ?? 'none'};

      display: flex;
      flex-direction: column;
      margin-bottom: 1.25rem;
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
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

interface QuoteCollectionData {
  quotes: QuoteType[];
}

export enum QuoteSizes {
  small = 200,

  large = 360,
}
const QuoteCarousel = ({
  data,
  index,
  maxWidth,
}: {
  data: QuoteCollectionData;
  index?: number;
  maxWidth?: string;
}) => {
  const { quotes } = data;
  const { className, styles } = getStyles(maxWidth);

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  if (!data || !quotes) return null;
  const { quote, attribution } = quotes[activeQuoteIndex];

  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        <div className="layout ">
          <AnimatePresence exitBeforeEnter>
            <Quote
              key={activeQuoteIndex}
              quote={quote}
              attribution={attribution}
            />
          </AnimatePresence>
        </div>
        <IndicatorDotRow
          activeQuoteIndex={activeQuoteIndex}
          setActiveQuoteIndex={(i: number) => setActiveQuoteIndex(i)}
          quotes={quotes}
        />
      </motion.div>
      <style jsx>{`
        .layout {
          display: flex;
          padding: 0.625rem;
          background-color: var(--greyBlue);
          border-top: 4px solid var(--black);
          padding: 0.625rem 1.25rem;
        }
      `}</style>
      {styles}
    </>
  );
};

export default QuoteCarousel;
