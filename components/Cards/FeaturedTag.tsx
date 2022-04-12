export const FEATURED_TAG_LINE_HEIGHT = 22;

const FeaturedTag = ({ suffix }: { suffix?: string }) => {
  return (
    <div className="label-small">
      {suffix ? `Featured ${suffix}` : `Featured`}
      <style jsx>{`
        div {
          line-height: ${FEATURED_TAG_LINE_HEIGHT}px;
          color: var(--blueThree);
        }
      `}</style>
    </div>
  );
};
export default FeaturedTag;
