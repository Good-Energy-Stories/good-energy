import React from 'react';
import dynamic from 'next/dynamic';
import { ArticleCardStyle, CharacterProfileCardStyle } from './';
const ArticleCard = dynamic(() => import('./ArticleCard'));
const CharacterProfileCard = dynamic(() => import('./CharacterProfileCard'));
const QuoteCarousel = dynamic(() => import('../QuoteCarousel/QuoteCarousel'));

export const Card = ({
  index,
  last,
  content,
  shouldUseExpandedStyles = true,
  articleCardStyle = ArticleCardStyle.standard,
  characterProfileCardStyle = CharacterProfileCardStyle.standard,
}: {
  index?: number;
  last?: boolean;
  content: any;
  shouldUseExpandedStyles?: boolean;
  articleCardStyle?: ArticleCardStyle;
  characterProfileCardStyle?: CharacterProfileCardStyle;
}) => {
  const type = content._type;
  switch (type) {
    case 'article':
      return (
        <ArticleCard
          index={index}
          last={last}
          data={content}
          style={articleCardStyle}
          shouldUseExpandedStyles={shouldUseExpandedStyles}
        />
      );
    case 'quoteCollection':
      return <QuoteCarousel index={index} data={content} />;
    case 'characterProfile':
      return (
        <CharacterProfileCard
          index={index}
          last={last}
          data={content}
          style={characterProfileCardStyle}
          shouldUseExpandedStyles={shouldUseExpandedStyles}
        />
      );
    default:
      return null;
  }
};

export default Card;
