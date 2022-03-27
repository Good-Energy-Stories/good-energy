import React from 'react';
import { ThreeColumnLayoutStyle } from './';
import ThreeColumnLayout from './ThreeColumnLayout';

export const PageDivider = ({ style }: { style: ThreeColumnLayoutStyle }) => {
  console.log('PAGEDIIFER: ', style);
  if (style === ThreeColumnLayoutStyle.primary) {
    return null;
  }

  return (
    <div>
      <h4>More Stories</h4>
      <style jsx>{`
        h4 {
          margin-bottom: 1.25rem;
        }
        div {
          border-bottom: 1px solid var(--blueThree);
          width: 100%;
          margin: 0 1.25rem;
          margin-bottom: 2.5rem;
          grid-column: 1/-1;
        }
      `}</style>
    </div>
  );
};

export default PageDivider;