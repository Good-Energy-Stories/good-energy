import { Card, ArticleCardStyle, CharacterProfileCardStyle } from '../Cards';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfileCard';

const Characters = ({ content }: { content: any }) => {
  if (!content) return null;
  return (
    <>
      <div className="layout">
        {content.map((c, i) => (
          <div key={i} className="card-wrapper">
            <Card
              index={i}
              content={c}
              articleCardStyle={ArticleCardStyle.small}
              characterProfileCardStyle={CharacterProfileCardStyle.standard}
              expertProfileCardStyle={ExpertProfileCardStyle.small}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .layout {
          grid-column: 1/-1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          overflow: hidden;
          position: relative;
          margin-bottom: 7.5rem;

          padding-top: 1.25rem;
        }
        .card-wrapper {
          margin: 0 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media only screen and (max-width: 1080px) {
          .layout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media only screen and (max-width: 768px) {
          .layout {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default Characters;
