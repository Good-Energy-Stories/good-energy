import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import QuoteCarousel from '../../QuoteCarousel/QuoteCarousel';
function getStyles(color) {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--${color});

      min-width: 100%;
      position: relative;
      overflow: hidden;
      border-top: 1px solid var(--blueFour);
      grid-column: 1/-1;
      cursor: pointer;
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

const ActiveQuoteCard = ({ quotes }) => {
  console.log(quotes);
  const quotesArray = quotes?.map(({ quote, attribution }) => ({
    quote,
    attribution,
  }));

  console.log('quotesArray', quotesArray);
  return (
    <div className="container">
      <QuoteCarousel data={{ quotes: quotesArray }} />
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
};

export default ActiveQuoteCard;
