import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import dynamic from 'next/dynamic';

const CharacterProfileStandard = dynamic(
  () => import('./CharacterProfileStandard'),
);
const CharacterProfileReadMore = dynamic(
  () => import('./CharacterProfileReadMore'),
);
const CharacterProfileFeaturedSecondary = dynamic(
  () => import('./CharacterProfileFeaturedSecondary'),
);
const CharacterProfileNextUp = dynamic(
  () => import('./CharacterProfileNextUp'),
);

const CharacterProfileSmall = dynamic(() => import('./CharacterProfileSmall'));
export enum CharacterProfileCardStyle {
  standard = 'standard',
  small = 'small',
  readMore = 'readMore',
  featuredSecondary = 'featuredSecondary',
  featuredSecondaryWide = 'featuredSecondaryWide',
  nextUp = 'nextUp',
}

export interface CharacterProfileData {
  name: string;
  shortBio?: string;
  slug: string;
  portraitImage: any;
}

const CharacterProfileCard = ({
  data,
  index,
  last,
  shouldUseExpandedStyles = true,
  style,
  onActionButtonClicked,
}: {
  data: CharacterProfileData;
  index?: number;
  last?: boolean;
  shouldUseExpandedStyles?: boolean;
  style: CharacterProfileCardStyle;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  switch (style) {
    case CharacterProfileCardStyle.standard:
      return (
        <CharacterProfileStandard
          data={data}
          index={index}
          last={last}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case CharacterProfileCardStyle.readMore:
      return (
        <CharacterProfileReadMore
          data={data}
          index={index}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case CharacterProfileCardStyle.small:
      return (
        <CharacterProfileSmall
          data={data}
          index={index}
          last={last}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case CharacterProfileCardStyle.featuredSecondary:
      return (
        <CharacterProfileFeaturedSecondary
          data={data}
          index={index}
          wide={shouldUseExpandedStyles && index === 0}
        />
      );
    case CharacterProfileCardStyle.nextUp:
      return (
        <CharacterProfileNextUp
          data={data}
          index={index}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    default:
      return (
        <CharacterProfileStandard
          data={data}
          index={index}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
  }
};

export default CharacterProfileCard;
