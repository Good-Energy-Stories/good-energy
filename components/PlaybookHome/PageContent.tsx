import React from 'react';
import dynamic from 'next/dynamic';
import { ThreeColumnLayoutStyle } from './';
const ThreeColumnLayout = dynamic(() => import('./ThreeColumnLayout'), {
  ssr: false,
});
const EmailCapture = dynamic(() => import('./EmailCapture'), { ssr: false });
const MegaQuote = dynamic(() => import('./MegaQuote'), { ssr: false });
const Playlist = dynamic(() => import('./Playlist'), { ssr: false });

export const PageContent = ({ index, content }) => {
  const type = content._type;

  switch (type) {
    case 'playbookThreeColumn':
      return (
        <ThreeColumnLayout
          data={content}
          style={ThreeColumnLayoutStyle.secondary}
        />
      );
    case 'emailCapture':
      return <EmailCapture index={index} data={content} />;
    case 'playbookQuote':
      return <MegaQuote index={index} data={content} />;
    case 'playlist':
      return <Playlist data={content} />;

    default:
      return null;
  }
};

export default PageContent;
