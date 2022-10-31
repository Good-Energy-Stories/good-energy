import { RefObject } from 'react';
import Section, { SectionRefLookup } from './Section';
import styles from './Content.module.css';
import Banner from '../Banner/Banner';

const Content = ({
  content,
  heroImage,
  sectionsRef,
  hasTOC,
}: {
  content: any;
  heroImage: any;
  sectionsRef: RefObject<SectionRefLookup>;
  hasTOC: boolean;
}) => {
  return (
    <section className={styles.container}>
      <Banner image={heroImage} hasTOC={hasTOC} />
      {content.map((item, index) => (
        <Section
          key={index}
          index={index}
          content={item}
          sectionsRef={sectionsRef}
        />
      ))}
    </section>
  );
};

export default Content;
