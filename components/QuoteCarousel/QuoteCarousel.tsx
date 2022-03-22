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
const { className, styles } = css.resolve`
  div {
    max-width: 765px;

    display: flex;
    flex-direction: column;
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

interface QuoteCollectionData {
  quotes: QuoteType[];
}
const QuoteCarousel = ({
  data,
  index,
}: {
  data: QuoteCollectionData;
  index: number;
}) => {
  const { quotes } = data;

  console.log('QuoteCarousel: ', data);

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  if (!quotes) return null;
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
        <div className="layout tease-quote-big">
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
