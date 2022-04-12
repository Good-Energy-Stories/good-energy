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
  const titledSections = sections.filter((s) => s.title !== null);
  if (!sections || titledSections.length === 0) return null;
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
          margin-top: 1.25rem;
          margin-bottom: 1.5rem;
        }
        div {
          height: 0;
          grid-row-start: 3;
          margin-left: 2.5rem;
          margin-right: 1.25rem;
          max-width: 228px;
          position: ${titledSections.length <= 10 ? 'sticky' : 'relative'};
          top: ${titledSections.length <= 10 ? PLAYBOOK_NAV_HEIGHT : 0}px;
        }
        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TOC;
