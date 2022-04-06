import React, { RefObject } from 'react';
import dynamic from 'next/dynamic';
const ArticleIntroductionSection = dynamic(
  () => import('./ArticleIntroductionSection/ArticleIntroductionSection'),
);

const ArticleQuote = dynamic(() => import('./ArticleQuote/ArticleQuote'));
const ArticleBlockQuote = dynamic(
  () => import('./ArticleBlockQuote/ArticleBlockQuote'),
);

export const IntroductionSection = ({
  index,
  content,
}: {
  index: number;
  content: any;
}) => {
  const type = content._type;

  switch (type) {
    case 'articleIntroductionSection':
      return <ArticleIntroductionSection index={index} data={content} />;
    case 'articleQuote':
      return <ArticleQuote index={index} data={content} />;
    case 'articleBlockQuote':
      return <ArticleBlockQuote index={index} data={content} isIntroduction />;

    default:
      return null;
  }
};

export default IntroductionSection;
