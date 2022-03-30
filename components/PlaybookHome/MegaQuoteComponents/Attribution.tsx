import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { CTAButton } from '../../';
import { MegaQuoteColor } from '../MegaQuote';

const Attribution = ({
  attribution,
  shouldLinkToAboutPage,
  color,
}: {
  attribution: string;
  shouldLinkToAboutPage: boolean;
  color: MegaQuoteColor;
}) => {
  return (
    <>
      <div className="attribution mega-quote-attribution">
        {shouldLinkToAboutPage ? (
          <CTAButton label="About Good Energy" href="/" color={color} />
        ) : (
          attribution
        )}
      </div>
      <style jsx>{`
        .attribution {
          display: inline-block;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Attribution;
