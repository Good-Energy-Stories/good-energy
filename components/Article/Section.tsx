import React from 'react';
import dynamic from 'next/dynamic';
import imageUrlFor from '../../utils/imageUrlFor';
const ArticleSection = dynamic(() => import('./ArticleSection/ArticleSection'));
const ArticleQuote = dynamic(() => import('./ArticleQuote/ArticleQuote'));

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
    default:
      return null;
  }
};

export default Section;
