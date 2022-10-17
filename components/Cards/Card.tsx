import React from 'react';
import dynamic from 'next/dynamic';
import { ArticleCardStyle } from './';
import { ExpertProfileCardStyle } from './ExpertProfile/ExpertProfileCard';
import { CharacterProfileCardStyle } from './CharacterProfile/CharacterProfileCard';

const ArticleCard = dynamic(() => import('./Article/ArticleCard'));
const CharacterProfileCard = dynamic(
  () => import('./CharacterProfile/CharacterProfileCard'),
);
const ExpertProfileCard = dynamic(
  () => import('./ExpertProfile/ExpertProfileCard'),
);

interface CardProps {
  content: any;
  index?: number;
  articleCardStyle?: ArticleCardStyle;
  characterProfileCardStyle?: CharacterProfileCardStyle;
  expertProfileCardStyle?: ExpertProfileCardStyle;
  className?: string;
  imageClassName?: string;
}

export enum CardType {
  twoWorldsArticle = 'twoWorldsArticle',
  whyClimateArticle = 'whyClimateArticle',
  characterProfilesPage = 'characterProfilesPage',
  article = 'article',
  characterProfile = 'characterProfile',
  expertProfile = 'expertProfile',
}

export const Card = ({
  content,
  index,
  articleCardStyle = ArticleCardStyle.standard,
  characterProfileCardStyle = CharacterProfileCardStyle.standard,
  expertProfileCardStyle = ExpertProfileCardStyle.standard,
  className,
  imageClassName,
}: CardProps) => {
  if (!content) return null;
  const type = content._type;

  switch (type) {
    case CardType.twoWorldsArticle:
    case CardType.whyClimateArticle:
    case CardType.characterProfilesPage:
    case CardType.article:
      return (
        <ArticleCard
          data={content}
          style={articleCardStyle}
          className={className}
        />
      );
    case CardType.characterProfile:
      return (
        <CharacterProfileCard
          data={content}
          style={characterProfileCardStyle}
          className={className}
          imageClassName={imageClassName}
        />
      );
    case CardType.expertProfile:
      return (
        <ExpertProfileCard
          index={index}
          data={content}
          style={expertProfileCardStyle}
          className={className}
        />
      );
    default:
      return null;
  }
};

export default Card;
