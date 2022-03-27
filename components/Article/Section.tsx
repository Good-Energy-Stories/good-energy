import React, { RefObject } from 'react';
import dynamic from 'next/dynamic';
const ArticleSection = dynamic(() => import('./ArticleSection/ArticleSection'));
const ArticleQuote = dynamic(() => import('./ArticleQuote/ArticleQuote'));
const ArticleStoryPossibility = dynamic(
  () => import('./ArticleStoryPossibility/ArticleStoryPossibility'),
);

export interface SectionRefLookup {
  [key: string]: HTMLDivElement | null;
}

export const Section = ({
  index,
  content,
  sectionsRef,
}: {
  index: number;
  content: any;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  const type = content._type;

  switch (type) {
    case 'articleSection':
      return (
        <ArticleSection
          index={index}
          data={content}
          sectionsRef={sectionsRef}
        />
      );
    case 'articleQuote':
      return <ArticleQuote index={index} data={content} />;
    case 'articleStoryPossibility':
      return <ArticleStoryPossibility index={index} data={content} />;
    default:
      return null;
  }
};

export default Section;
