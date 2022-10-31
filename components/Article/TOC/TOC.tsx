import React, { useCallback } from 'react';
import { RefObject } from 'react';

import styles from './TOC.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
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
  sectionsRef: RefObject<any>;
}) => {
  const titledSections = sections.filter((s) => s.title !== null);

  const scrollSectionIntoView = useCallback((section: HTMLDivElement) => {
    section.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setTimeout(() => {
      section.setAttribute('data-highlighted', 'true');
      setTimeout(() => {
        section.removeAttribute('data-highlighted');
      }, 1500);
    }, 750);
  }, []);

  if (!sections || titledSections.length === 0) return null;
  return (
    <nav className={styles.container}>
      <h3 className={styles.title}>Jump To Section</h3>
      <ul className={styles.ul}>
        {sections.map(({ key, title }) => (
          <li
            key={key}
            className={cx('nav-link-medium', styles.li)}
            onClick={() => scrollSectionIntoView(sectionsRef.current[key])}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
