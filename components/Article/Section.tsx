import React from 'react';
import dynamic from 'next/dynamic';
const ArticleSection = dynamic(() => import('./ArticleSection/ArticleSection'));
const ArticleQuote = dynamic(() => import('./ArticleQuote/ArticleQuote'));
const ArticleStoryPossibility = dynamic(
  () => import('./ArticleStoryPossibility/ArticleStoryPossibility'),
);
export const Section = ({
  index,
  content,
}: {
  index: number;
  content: any;
}) => {
  const type = content._type;

  switch (type) {
    case 'articleSection':
      return <ArticleSection index={index} data={content} />;
    case 'articleQuote':
      return <ArticleQuote index={index} data={content} />;
    case 'articleStoryPossibility':
      return <ArticleStoryPossibility index={index} data={content} />;
    default:
      return null;
  }
};

export default Section;