import { Card } from '../../components/Cards';
import { ActiveQuoteCard } from '../../components/Cards/FeaturedVoiceCardComponents';
import { useState } from 'react';

const Row = ({ featuredVoices }) => {
  const [activeQuotes, setActiveQuotes] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="featured-voices-row">
        <div className="featured-voices-cards">
          {featuredVoices.map((fv, i) => {
            return (
              <Card
                key={i}
                index={i}
                content={fv}
                last={i === featuredVoices.length - 1}
                active={activeIndex === i}
                onActionButtonClicked={() => {
                  if (fv?.quotes) {
                    if (activeIndex === i) {
                      setActiveQuotes(null);
                      setActiveIndex(null);
                    } else {
                      setActiveQuotes(fv.quotes);
                      setActiveIndex(i);
                    }
                  }
                }}
              />
            );
          })}
        </div>
        <div className="featured-voices-active-quote">
          <ActiveQuoteCard quotes={activeQuotes} />
        </div>
      </div>

      <style jsx>{`
        .featured-voices-row {
          grid-column: 1/5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          margin-bottom: 2.5rem;
        }
        .featured-voices-cards {
          width: 100%;
          display: flex;
          border-bottom: 1px solid var(--blueThree);
          justify-content: space-around;
        }
        .featured-voices-active-quote {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Row;
