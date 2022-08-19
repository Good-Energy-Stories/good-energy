import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { CTAButton } from '../';
import {
  Quote,
  Attribution,
  SpotIllustration,
  QuoteIllustration,
} from './MegaQuoteComponents';

function getStyles(color) {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--${color});
      min-width: 100%;
      position: relative;
      overflow: hidden;
      border-top: 4px solid var(--blueFour);
      grid-column: 1/-1;
      padding: 0 2.5rem;
      padding-bottom: 2.5rem;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;
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

interface PlaybookQuoteData {
  quote: string;
  attribution: string;
  backgroundColor: string;
  shouldLinkToAboutPage: boolean;
}

export enum MegaQuoteColor {
  black = 'black',
  white = 'white',
}

const MegaQuote = ({
  data,
  index,
}: {
  data: PlaybookQuoteData;
  index: number;
}) => {
  const {
    quote,
    attribution,
    shouldLinkToAboutPage,
    backgroundColor: color,
  } = data;

  const backgroundColor = color ?? MegaQuoteColor.black;
  const { className, styles } = getStyles(backgroundColor);
  const inverseColor =
    backgroundColor === MegaQuoteColor.black
      ? MegaQuoteColor.white
      : MegaQuoteColor.black;

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div>
        <Quote quote={quote} color={inverseColor} />
        <Attribution
          attribution={attribution}
          shouldLinkToAboutPage={shouldLinkToAboutPage}
          color={inverseColor}
        />
      </div>
      <SpotIllustration
        illustration={
          backgroundColor === MegaQuoteColor.black
            ? QuoteIllustration.flowers
            : QuoteIllustration.fern
        }
      />

      <style jsx>{`
        div {
          padding: 2.5rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default MegaQuote;
