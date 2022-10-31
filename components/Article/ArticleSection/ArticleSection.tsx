import { RefObject } from 'react';
import DesktopFootnotes from '../Footnotes/DesktopFootnotes';
import { SectionRefLookup } from '../Content/Section';
import styles from './ArticleSection.module.css';
import PortableTextSerializer from '../../PortableTextSerializer';
import { PortableText } from '@portabletext/react';

const ArticleSection = ({
  data,
  sectionsRef,
}: {
  data: any;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  const { _key, footnotes, title, body } = data;
  return (
    <div
      ref={(el) => (sectionsRef.current[_key] = el)}
      className={styles.container}
    >
      <div className={styles.inner}>
        {title && <h3>{title}</h3>}

        <PortableText value={body} components={PortableTextSerializer} />
      </div>
      <DesktopFootnotes footnotes={footnotes} />
    </div>
  );
};

export default ArticleSection;
