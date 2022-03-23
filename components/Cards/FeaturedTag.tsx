export const FEATURED_TAG_LINE_HEIGHT = 22;

const FeaturedTag = () => {
  return (
    <div>
      Featured
      <style jsx>{`
        div {
          font-family: var(--flexa-mono);
          font-size: 18px;
          font-style: normal;
          font-weight: 100;
          line-height: ${FEATURED_TAG_LINE_HEIGHT}px;
          letter-spacing: 0em;
          text-align: left;
          text-transform: uppercase;
          color: var(--blueThree);
        }
      `}</style>
    </div>
  );
};
export default FeaturedTag;
