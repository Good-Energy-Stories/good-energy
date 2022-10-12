import styles from './ActiveQuoteCard.module.css';
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel';

const ActiveQuoteCard = ({ quotes }) => {
  const quotesArray = quotes?.map(({ quote, attribution }) => ({
    quote,
    attribution,
  }));
  return (
    <div className={styles.container}>
      <QuoteCarousel data={{ quotes: quotesArray }} />
    </div>
  );
};

export default ActiveQuoteCard;
