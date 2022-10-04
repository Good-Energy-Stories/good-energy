import { Card, ArticleCardStyle, CharacterProfileCardStyle } from './Cards';
import PageDivider, { PageDividerLabelSize } from './PageDivider';

const Related = ({ content }: { content: any }) => {
  if (!content) return null;
  return (
    <>
      <PageDivider
        label="Related"
        labelSize={PageDividerLabelSize.small}
        style={{
          margin: '0 var(--spacing-large)',
          marginBottom: 'var(--spacing-medium)',
        }}
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
          grid-column: 1/-1;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: var(--spacing-small);
          padding: 0 2.5rem;
          overflow: hidden;
          position: relative;
        }

        @media only screen and (max-width: 1080px) {
          .layout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media only screen and (max-width: 768px) {
          .layout {
            padding: 0 0.625rem;
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default Related;
