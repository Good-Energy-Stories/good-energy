import React from 'react';
import dynamic from 'next/dynamic';
import { ArticleCardStyle, CharacterProfileCardStyle } from './';
const ArticleCard = dynamic(() => import('./ArticleCard'));
const CharacterProfileCard = dynamic(() => import('./CharacterProfileCard'));
const QuoteCarousel = dynamic(() => import('../QuoteCarousel/QuoteCarousel'));

export const Card = ({
  index,
  content,
  articleCardStyle = ArticleCardStyle.standard,
  characterProfileCardStyle = CharacterProfileCardStyle.standard,
}: {
  index: number;
  content: any;
  articleCardStyle?: ArticleCardStyle;
  characterProfileCardStyle?: CharacterProfileCardStyle;
}) => {
  const type = content._type;

  switch (type) {
    case 'article':
      return (
        <ArticleCard index={index} data={content} style={articleCardStyle} />
      );
    case 'quoteCollection':
      return <QuoteCarousel index={index} data={content} />;
    case 'characterProfile':
      return (
        <CharacterProfileCard
          index={index}
          data={content}
          style={characterProfileCardStyle}
        />
      );
    default:
      return null;
  }
};

export default Card;
