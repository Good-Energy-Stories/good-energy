import React from 'react';
import dynamic from 'next/dynamic';

const ThreeColumnLayout = dynamic(() => import('./ThreeColumnLayout'));
const EmailCapture = dynamic(() => import('./EmailCapture'));
const MegaQuote = dynamic(() => import('./MegaQuote'));

export const PageContent = ({ index, content }) => {
  const type = content._type;

  switch (type) {
    case 'playbookThreeColumn':
      return <ThreeColumnLayout index={index} data={content} />;
    case 'emailCapture':
      return <EmailCapture index={index} data={content} />;
    case 'playbookQuote':
      return <MegaQuote index={index} data={content} />;

    default:
      return null;
  }
};

export default PageContent;
