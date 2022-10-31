import styles from './Article.module.css';
import { useRef } from 'react';
import Content from './Content/Content';
import { SectionRefLookup } from './Content/Section';
import Header from './Header/Header';
import TOC from './TOC/TOC';
import AuthorSection from './AuthorSection/AuthorSection';

const sectionsToTOC = (sections: any) => {
  if (!sections) return [];
  return sections
    .filter(({ _type, title }) => _type === 'articleSection' && title !== null)
    .map(({ _key, title }) => ({ key: _key, title }));
};

const Article = ({ data }: { data: any }) => {
  const sectionsRef = useRef<SectionRefLookup>({});
  const toc = sectionsToTOC(data?.body);

  return (
    <>
      <div className={styles.container}>
        <Header title={data?.title} byline={data?.byline} />
        <TOC sections={toc} sectionsRef={sectionsRef} />
        <Content
          content={data?.body}
          sectionsRef={sectionsRef}
          heroImage={data?.heroImage}
          hasTOC={toc.length > 0}
        />
      </div>
      {data?.author?.length > 0 && <AuthorSection content={data.author} />}
    </>
  );
};

export default Article;
