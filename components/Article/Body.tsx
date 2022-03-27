import React, { RefObject } from 'react';
import { SectionRefLookup, Section } from '.';

export const Body = ({
  body,
  sectionsRef,
}: {
  body: any;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  return (
    <>
      {body.map((c, i) => (
        <Section key={i} index={i} content={c} sectionsRef={sectionsRef} />
      ))}
      <style jsx>{`
        div {
        }
      `}</style>
    </>
  );
};

export default Body;
