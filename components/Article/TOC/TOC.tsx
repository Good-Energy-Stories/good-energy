import React from 'react';
import { Section } from './';
import { SectionRefLookup } from '../';
import { RefObject } from 'react';
import { PLAYBOOK_NAV_HEIGHT } from '../../';
export interface SectionTOC {
  title: string;
  key: string;
}

export type SectionsTOC = SectionTOC[];

export const TOC = ({
  sections,
  sectionsRef,
}: {
  sections: SectionsTOC;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  if (!sections) return null;
  const scrollIntoView = (section: HTMLDivElement) => {
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <h3>In this article</h3>
      {sections.map((e) => (
        <Section
          key={e.key}
          title={e.title}
          scrollIntoView={() => scrollIntoView(sectionsRef.current[e.key])}
        />
      ))}
      <style jsx>{`
        h3 {
          margin-bottom: 1.5rem;
        }
        div {
          grid-row-start: 4;
          margin-left: 2.5rem;
          position: sticky;
          top: ${PLAYBOOK_NAV_HEIGHT}px;
        }
      `}</style>
    </div>
  );
};

export default TOC;
