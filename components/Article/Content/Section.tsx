import React, { RefObject } from 'react';
import dynamic from 'next/dynamic';

const ArticleSection = dynamic(
  () => import('../ArticleSection/ArticleSection'),
);
const SpotIllustration = dynamic(
  () => import('../SpotIllustration/SpotIllustration'),
);
const Quote = dynamic(() => import('../Quote/Quote'));
const BlockQuote = dynamic(() => import('../BlockQuote/BlockQuote'));
const StoryPossibility = dynamic(
  () => import('../StoryPossibility/StoryPossibility'),
);

export interface SectionRefLookup {
  [key: string]: HTMLDivElement | null;
}

export const Section = ({
  index,
  content,
  sectionsRef,
}: {
  index: number;
  content: any;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  const type = content._type;

  switch (type) {
    case 'articleSection':
      return <ArticleSection data={content} sectionsRef={sectionsRef} />;
    case 'articleQuote':
      return <Quote data={content} />;
    case 'articleBlockQuote':
      return <BlockQuote data={content} />;
    case 'articleStoryPossibility':
      return <StoryPossibility index={index} data={content} />;
    case 'articleSpotIllustration':
      return <SpotIllustration data={content} />;
    default:
      return null;
  }
};

export default Section;
