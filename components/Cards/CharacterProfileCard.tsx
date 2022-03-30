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

export enum CharacterProfileCardStyle {
  standard = 'standard',

  readMore = 'readMore',
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
  style,
}: {
  data: CharacterProfileData;
  index: number;
  style: CharacterProfileCardStyle;
}) => {
  switch (style) {
    case CharacterProfileCardStyle.standard:
      return <CharacterProfileStandard data={data} index={index} />;

    case CharacterProfileCardStyle.readMore:
      return <CharacterProfileReadMore data={data} index={index} />;
    default:
      return <CharacterProfileStandard data={data} index={index} />;
  }
};

export default CharacterProfileCard;
