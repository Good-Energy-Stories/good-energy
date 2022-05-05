import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import dynamic from 'next/dynamic';
const ExpertProfileNextUp = dynamic(() => import('./ExpertProfileNextUp'));
const ExpertProfileReadMore = dynamic(() => import('./ExpertProfileReadMore'));
const ExpertProfileSmall = dynamic(() => import('./ExpertProfileSmall'));
const ExpertProfileSearch = dynamic(() => import('./ExpertProfileSearch'));
const ExpertProfileStandard = dynamic(() => import('./ExpertProfileStandard'));

export enum ExpertProfileCardStyle {
  small = 'small',
  readMore = 'readMore',
  nextUp = 'nextUp',
  standard = 'standard',
  search = 'search',
}

const CharacterProfileCard = ({
  data,
  index,
  last,
  shouldUseExpandedStyles = true,
  style,
  onActionButtonClicked,
}: {
  data: any;
  index: number;
  last?: boolean;
  shouldUseExpandedStyles?: boolean;
  style: ExpertProfileCardStyle;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  switch (style) {
    case ExpertProfileCardStyle.small:
      return (
        <ExpertProfileSmall
          data={data}
          index={index}
          last={last}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case ExpertProfileCardStyle.readMore:
      return (
        <ExpertProfileReadMore
          data={data}
          index={index}
          last={last}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case ExpertProfileCardStyle.standard:
      return <ExpertProfileStandard data={data} index={index} last={last} />;
    case ExpertProfileCardStyle.search:
      return <ExpertProfileSearch data={data} index={index} />;
    case ExpertProfileCardStyle.nextUp:
      return (
        <ExpertProfileNextUp
          data={data}
          index={index}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    default:
      return <ExpertProfileStandard data={data} index={index} />;
  }
};

export default CharacterProfileCard;
