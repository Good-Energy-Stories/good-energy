import React from 'react';
import dynamic from 'next/dynamic';

const SingleSection = dynamic(() => import('./SingleSection'));
const Illustration = dynamic(() => import('./Illustration'));
const CompareSection = dynamic(() => import('./CompareSection'));

export const PageContent = ({ index, content, activeSide }) => {
  const type = content._type;
  console.log('rise: ', type);
  switch (type) {
    case 'twoWorldsCompareSection':
      return (
        <CompareSection index={index} data={content} activeSide={activeSide} />
      );

    case 'twoWorldsSection':
      return <SingleSection index={index} data={content} />;

    default:
      return null;
  }
};

export default PageContent;
