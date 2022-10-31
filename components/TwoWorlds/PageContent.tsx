import React from 'react';
import dynamic from 'next/dynamic';

const CompareSection = dynamic(() => import('./CompareSection/CompareSection'));
const Section = dynamic(() => import('./Section/Section'));

export const PageContent = ({ content }) => {
  const type = content._type;
  switch (type) {
    case 'twoWorldsCompareSection':
      return <CompareSection data={content} />;
    case 'twoWorldsSection':
      return <Section data={content} />;
    default:
      return null;
  }
};

export default PageContent;
