import React from 'react';
import dynamic from 'next/dynamic';

const Section = dynamic(() => import('./Section/Section'));
const Illustration = dynamic(() => import('./Illustration/Illustration'));

export const PageContent = ({ index, content }) => {
  const type = content._type;
  switch (type) {
    case 'illustration':
      return <Illustration data={content} />;
    case 'whyClimateTextBlock':
      return <Section data={content} />;
    default:
      return null;
  }
};

export default PageContent;
