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
            const active = activeIndex === i;
            return (
              <>
                <Card
                  key={i}
                  index={i}
                  content={fv}
                  last={i === featuredVoices.length - 1}
                  active={active}
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
                {active && (
                  <div className="mobile-featured-voices-active-quote">
                    <ActiveQuoteCard quotes={activeQuotes} />
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="featured-voices-active-quote">
          <ActiveQuoteCard quotes={activeQuotes} />
        </div>
      </div>

      <style jsx>{`
        .featured-voices-row {
          grid-column: 1/-1;
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
        .mobile-featured-voices-active-quote {
          display: none;
        }
        .featured-voices-active-quote {
          width: 100%;
        }
        @media only screen and (max-width: 768px) {
          .featured-voices-row {
            margin-bottom: 0;
          }
          .featured-voices-cards {
            flex-direction: column;
            justify-content: center;
            border: 0;
          }
          .featured-voices-active-quote {
            display: none;
          }
          .mobile-featured-voices-active-quote {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Row;
