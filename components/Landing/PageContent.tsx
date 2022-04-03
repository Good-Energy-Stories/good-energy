import React from 'react';
import dynamic from 'next/dynamic';
import { ThreeColumnLayoutStyle } from '../PlaybookHome';
const ThreeColumnLayout = dynamic(
  () => import('../PlaybookHome/ThreeColumnLayout'),
);
const EmailCapture = dynamic(() => import('../PlaybookHome/EmailCapture'));
const MegaQuote = dynamic(() => import('../PlaybookHome/MegaQuote'));
const Playlist = dynamic(() => import('../PlaybookHome/Playlist'));
const ResourceSection = dynamic(() => import('./ResourceSection'));

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
    case 'resourceSection':
      return <ResourceSection data={content} />;
    default:
      return null;
  }
};

export default PageContent;
