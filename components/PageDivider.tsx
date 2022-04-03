import React from 'react';

export const PageDivider = ({ label }: { label?: string }) => {
  return (
    <div>
      <h4>{label}</h4>
      <style jsx>{`
        h4 {
          margin-bottom: 0.625rem;
        }
        div {
          border-bottom: 1px solid var(--blueThree);
          width: calc(100% - 2.5rem);
          margin: 0 1.25rem;
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
          grid-column: 1/-1;
        }
      `}</style>
    </div>
  );
};

export default PageDivider;
