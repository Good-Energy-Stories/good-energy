import React, { RefObject } from 'react';
import { IntroductionSection } from '.';

export const Introduction = ({ body }: { body: any }) => {
  if (!body) return null;
  return (
    <>
      {body.map((c, i) => (
        <IntroductionSection key={i} index={i} content={c} />
      ))}
      <style jsx>{`
        div {
        }
      `}</style>
    </>
  );
};

export default Introduction;
