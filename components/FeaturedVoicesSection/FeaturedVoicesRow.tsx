import ActiveQuoteCard from './ActiveQuoteCard';
import { useState } from 'react';
import styles from './FeaturedVoicesRow.module.css';
import FeaturedVoice from './FeaturedVoice';

const FeaturedVoicesRow = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    console.log('index', index);
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const activeQuotes = data[activeIndex]?.quotes;

  return (
    <>
      <div className={styles.container}>
        {data.map((item, index) => {
          const active = activeIndex === index;
          return (
            <>
              <FeaturedVoice
                key={index}
                data={item}
                active={active}
                onClick={() => handleClick(index)}
              />
            </>
          );
        })}
      </div>
      <div className={styles.quoteContainer}>
        <ActiveQuoteCard quotes={activeQuotes} />
      </div>
    </>
  );
};

export default FeaturedVoicesRow;
