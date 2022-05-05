import React from 'react';
import dynamic from 'next/dynamic';
import { ThreeColumnLayoutStyle } from '../PlaybookHome';
const Article = dynamic(() => import('../Article/Article'));
const SpotlightBody = dynamic(() => import('../SpotlightBody'));

export const PageContent = ({ content }, ref) => {
  if (!content) return null;
  const type = content._type;

  switch (type) {
    case 'article':
      return <Article data={content} isInPlaylist />;
    case 'characterProfile':
      return (
        <SpotlightBody
          name={content?.name}
          shortBio={content?.shortBio}
          bio={content?.bio}
          nextUp={content?.nextUp}
          portraitImage={content?.portraitImage}
          isInPlaylist
        />
      );
    case 'expertProfile':
      return (
        <SpotlightBody
          name={content?.name}
          shortBio={content?.shortBio}
          bio={content?.bio}
          nextUp={content?.nextUp}
          portraitImage={content?.fullSizePortraitImage}
          isInPlaylist
        />
      );
    default:
      return null;
  }
};

export default PageContent;
