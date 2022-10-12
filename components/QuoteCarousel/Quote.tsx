import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { QuoteType } from './';
const { className, styles } = css.resolve`
  div {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  out: {
    opacity: 0,
    x: 50,
    transition: { duration: 1 },
  },
};

const Quote = ({ quote, attribution }: QuoteType) => {
  const isLongQuote = quote.length >= 200;
  return (
    <motion.div className={className} variants={variants}>
      <span>
        <div className={isLongQuote ? 'quote-md' : 'quote-xl'}>{quote}</div>

        <div className="attribution quote-attribution">{attribution}</div>
      </span>

      <style jsx>{`
        h4 {
          text-transform: none;
        }
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
