import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { MegaQuoteColor } from '../MegaQuote';
const Quote = ({ quote, color }: { quote: string; color: MegaQuoteColor }) => {
  return (
    <>
      <div className="quote">
        <h1 className="h1-quote">{`${quote}`}</h1>
      </div>
      <style jsx>{`
        h1::before {
          content: '“';
          position: absolute;
          margin-left: -45px;
        }
        h1::after {
          content: '”';
        }
        .quote {
          margin-bottom: 1.5rem;
          margin-right: 22vw;
          color: var(--${color});
        }
        @media only screen and (max-width: 768px) {
          h1::before {
            margin-left: -25px;
          }
          .quote {
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Quote;
