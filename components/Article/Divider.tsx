import React from 'react';

export const Divider = () => {
  return (
    <div>
      <style jsx>{`
        h4 {
          margin-bottom: 1.25rem;
        }
        div {
          border-bottom: 1px solid var(--blueThree);
          width: calc(100% - 5rem);
          margin: 0 2.5rem;
          margin-bottom: 5rem;
          grid-column: 1/5;
        }
      `}</style>
    </div>
  );
};

export default Divider;
