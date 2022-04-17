import React from 'react';
import dynamic from 'next/dynamic';
import { ArticleCardStyle, CharacterProfileCardStyle } from './';
import { ExpertProfileCardStyle } from './ExpertProfileCard';
const ArticleCard = dynamic(() => import('./ArticleCard'));
const CharacterProfileCard = dynamic(() => import('./CharacterProfileCard'));
const ExpertProfileCard = dynamic(() => import('./ExpertProfileCard'));
const QuoteCarousel = dynamic(() => import('../QuoteCarousel/QuoteCarousel'));
const FeaturedVoiceCard = dynamic(() => import('./FeaturedVoiceCard'));

export const Card = ({
  index,
  last,
  content,
  shouldUseExpandedStyles = true,
  articleCardStyle = ArticleCardStyle.standard,
  characterProfileCardStyle = CharacterProfileCardStyle.standard,
  expertProfileCardStyle = ExpertProfileCardStyle.standard,
  marginBottom,
  active,
  onActionButtonClicked,
}: {
  index?: number;
  last?: boolean;
  content: any;
  shouldUseExpandedStyles?: boolean;
  articleCardStyle?: ArticleCardStyle;
  characterProfileCardStyle?: CharacterProfileCardStyle;
  expertProfileCardStyle?: ExpertProfileCardStyle;
  marginBottom?: string;
  active?: boolean;
  onActionButtonClicked?: () => void;
}) => {
  if (!content) return null;
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
    case 'expertProfile':
      return (
        <ExpertProfileCard
          index={index}
          last={last}
          data={content}
          style={expertProfileCardStyle}
        />
      );
    case 'featuredVoice':
      return (
        <FeaturedVoiceCard
          index={index}
          last={last}
          data={content}
          active={active}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case 'quoteCarousel':
      return <QuoteCarousel data={content} />;
    default:
      return null;
  }
};

export default Card;
