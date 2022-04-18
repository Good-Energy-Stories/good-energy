import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import dynamic from 'next/dynamic';

const ExpertProfileSmall = dynamic(() => import('./ExpertProfileSmall'));
const ExpertProfileSearch = dynamic(() => import('./ExpertProfileSearch'));
const ExpertProfileStandard = dynamic(() => import('./ExpertProfileStandard'));

export enum ExpertProfileCardStyle {
  small = 'small',
  standard = 'standard',
  search = 'search',
}

const CharacterProfileCard = ({
  data,
  index,
  last,
  shouldUseExpandedStyles = true,
  style,
}: {
  data: any;
  index: number;
  last?: boolean;
  shouldUseExpandedStyles?: boolean;
  style: ExpertProfileCardStyle;
}) => {
  switch (style) {
    case ExpertProfileCardStyle.small:
      return <ExpertProfileSmall data={data} index={index} last={last} />;
    case ExpertProfileCardStyle.standard:
      return <ExpertProfileStandard data={data} index={index} last={last} />;
    case ExpertProfileCardStyle.search:
      return <ExpertProfileSearch data={data} index={index} />;
    default:
      return <ExpertProfileStandard data={data} index={index} />;
  }
};

export default CharacterProfileCard;
