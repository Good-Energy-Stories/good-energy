import React, { RefObject } from 'react';
import { IntroductionSection } from '.';

export const Introduction = ({
  body,
  includeDropCap = false,
}: {
  body: any;
  includeDropCap?: boolean;
}) => {
  if (!body) return null;
  return (
    <>
      {body.map((c, i) => (
        <IntroductionSection
          key={i}
          index={i}
          content={c}
          includeDropCap={includeDropCap}
        />
      ))}
      <style jsx>{`
        div {
        }
      `}</style>
    </>
  );
};

export default Introduction;
