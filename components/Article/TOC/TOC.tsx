import React from 'react';
import { Section } from './';
import { SectionRefLookup } from '../';
import { RefObject } from 'react';
import { PLAYBOOK_NAV_HEIGHT } from '../../';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { useStore } from '../../../stores/store';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
} from '../../../lib/framer/framer-animations';

function getStyles(sticky) {
  return css.resolve`
    div {
      height: 0;
      grid-row-start: 3;
      margin-left: 2.5rem;
      margin-right: 1.25rem;
      max-width: 228px;
      position: ${sticky ? 'sticky' : 'relative'};
      top: ${sticky ? PLAYBOOK_NAV_HEIGHT : 0}px;
    }
    @media only screen and (max-width: 768px) {
      div {
        display: none;
      }
    }
  `;
}
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
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const titledSections = sections.filter((s) => s.title !== null);
  if (!sections || titledSections.length === 0) return null;
  const scrollIntoView = (section: HTMLDivElement) => {
    section.scrollIntoView({ behavior: 'smooth' });
  };
  const { className, styles } = getStyles(titledSections.length <= 10);
  return (
    <motion.div
      transition={FRAMER_TRANSITION_FASTEASE}
      animate={{ x: scrollPosition < 0.7 ? 0 : -300 }}
      className={className}
    >
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
      `}</style>
      {styles}
    </motion.div>
  );
};

export default TOC;
