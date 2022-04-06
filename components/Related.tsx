import { Card, ArticleCardStyle, CharacterProfileCardStyle } from './Cards';
import PageDivider, { PageDividerLabelSize } from './PageDivider';

const Related = ({ content }: { content: any }) => {
  return (
    <>
      <PageDivider
        label="Related"
        labelSize={PageDividerLabelSize.small}
        marginBottom={'1.25rem'}
      />
      <div className="layout">
        {content.map((c, i) => (
          <div key={i} className="card-wrapper">
            <Card
              index={i}
              content={c}
              last
              articleCardStyle={ArticleCardStyle.small}
              characterProfileCardStyle={CharacterProfileCardStyle.readMore}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .layout {
          grid-column: 1/5;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));

          overflow: hidden;
          position: relative;

          padding-top: 1.25rem;
        }
        .card-wrapper {
          margin: 0 1.25rem;
        }
        @media only screen and (max-width: 1080px) {
          .layout {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @media only screen and (max-width: 768px) {
          .layout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default Related;
