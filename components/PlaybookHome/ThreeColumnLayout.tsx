import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '../Cards';
interface ThreeColumnLayoutData {
  leftColumn: any[];
  mainColumn: any[];
  rightColumn: any[];
}
export const ThreeColumnLayout = ({
  data,
  index,
}: {
  data: ThreeColumnLayoutData;
  index: number;
}) => {
  const { leftColumn, mainColumn, rightColumn } = data;

  return (
    <>
      <div className="left-column">
        {leftColumn.map((c, i) => (
          <Card key={i} index={i} content={c} />
        ))}
      </div>
      <div className="main-column">
        {mainColumn.map((c, i) => (
          <Card key={i} index={i} content={c} />
        ))}
      </div>
      <div className="right-column">
        {rightColumn.map((c, i) => (
          <Card key={i} index={i} content={c} />
        ))}
      </div>
      <style jsx>{`
        .left-column {
          grid-column: 1/2;
          padding-left: 1.25rem;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .main-column {
          grid-column: 2/4;
          padding: 0 1.25rem;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .right-column {
          grid-column: 4/5;
          padding-right: 1.25rem;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default ThreeColumnLayout;
