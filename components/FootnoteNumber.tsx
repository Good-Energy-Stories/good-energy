const FootnoteNumber = ({ number }) => {
  return (
    <span>
      <sup>{number}</sup>
      <style jsx>{`
        span {
          color: var(--blueThree);
        }
        @media only screen and (max-width: 768px) {
          span {
          }
        }
      `}</style>
    </span>
  );
};

export default FootnoteNumber;
