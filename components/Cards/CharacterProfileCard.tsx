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

const CharacterProfileSmall = dynamic(() => import('./CharacterProfileSmall'));
export enum CharacterProfileCardStyle {
  standard = 'standard',
  small = 'small',
  readMore = 'readMore',
  featuredSecondary = 'featuredSecondary',
  featuredSecondaryWide = 'featuredSecondaryWide',
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
}: {
  data: CharacterProfileData;
  index: number;
  last?: boolean;
  shouldUseExpandedStyles?: boolean;
  style: CharacterProfileCardStyle;
}) => {
  switch (style) {
    case CharacterProfileCardStyle.standard:
      return <CharacterProfileStandard data={data} index={index} last={last} />;
    case CharacterProfileCardStyle.readMore:
      return <CharacterProfileReadMore data={data} index={index} />;
    case CharacterProfileCardStyle.small:
      return <CharacterProfileSmall data={data} index={index} last={last} />;
    case CharacterProfileCardStyle.featuredSecondary:
      return (
        <CharacterProfileFeaturedSecondary
          data={data}
          index={index}
          wide={shouldUseExpandedStyles && index === 0}
        />
      );

    default:
      return <CharacterProfileStandard data={data} index={index} />;
  }
};

export default CharacterProfileCard;
