import React from 'react';
import dynamic from 'next/dynamic';
import imageUrlFor from '../../utils/imageUrlFor';

const ArticleCard = dynamic(() => import('./ArticleCard'));
const CharacterProfileCard = dynamic(() => import('./CharacterProfileCard'));
const QuoteCarousel = dynamic(() => import('../QuoteCarousel/QuoteCarousel'));

export const Card = ({ index, content }) => {
  const type = content._type;

  switch (type) {
    case 'article':
      return <ArticleCard index={index} data={content} />;
    case 'quoteCollection':
      return <QuoteCarousel index={index} data={content} />;
    case 'characterProfile':
      return <CharacterProfileCard index={index} data={content} />;
    default:
      return null;
  }
};

export default Card;
