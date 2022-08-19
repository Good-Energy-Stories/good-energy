import { MegaQuoteColor } from '../MegaQuote';
interface QuoteProps {
  quote: string;
  color: MegaQuoteColor;
}

const Quote = ({ quote, color }: QuoteProps) => {
  return (
    <div>
      <h1 className="h1-quote">{`${quote}`}</h1>

      <style jsx>{`
        div {
          margin-bottom: var(--spacing-large);
          margin-right: var(--spacing-xxlarge);
          color: var(--${color});
        }
        @media only screen and (max-width: 768px) {
          div {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Quote;
