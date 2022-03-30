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
const CharacterProfileFeaturedSecondaryWide = dynamic(
  () => import('./CharacterProfileFeaturedSecondaryWide'),
);

export enum CharacterProfileCardStyle {
  standard = 'standard',

  readMore = 'readMore',
  featuredSecondary = 'featuredSecondary',
  featuredSecondaryWide = 'featuredSecondaryWide',
}

export interface CharacterProfileData {
  name: string;
  shortBio: string;
  slug: string;
  portraitImage: any;
  tags: string[];
}

const CharacterProfileCard = ({
  data,
  index,
  shouldUseExpandedStyles = true,
  style,
}: {
  data: CharacterProfileData;
  index: number;
  shouldUseExpandedStyles?: boolean;
  style: CharacterProfileCardStyle;
}) => {
  switch (style) {
    case CharacterProfileCardStyle.standard:
      return <CharacterProfileStandard data={data} index={index} />;

    case CharacterProfileCardStyle.readMore:
      return <CharacterProfileReadMore data={data} index={index} />;
    case CharacterProfileCardStyle.featuredSecondary:
      if (shouldUseExpandedStyles && index === 0) {
        return (
          <CharacterProfileFeaturedSecondaryWide data={data} index={index} />
        );
      }
      return <CharacterProfileFeaturedSecondary data={data} index={index} />;

    default:
      return <CharacterProfileStandard data={data} index={index} />;
  }
};

export default CharacterProfileCard;
