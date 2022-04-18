import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Name, Bio, Portrait } from './CharacterProfileCardComponents';
import Link from 'next/link';
import { CharacterProfileData } from './CharacterProfileCard';
import { PortraitSizes } from './CharacterProfileCardComponents';
import { Tags } from './';
import SmallBorderCTAButton from '../SmallBorderCTAButton';
import { SeeQuotesButton } from './FeaturedVoiceCardComponents';
function getStyles(maxWidth, last) {
  return css.resolve`
    div {
      display: inline-block;
      height: 100%;
      width: 100%;
      max-width: 228px;
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      div {
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        margin-bottom: 0;
        padding-bottom: 0;
        display: grid;
        max-width: 100%;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const FeaturedVoiceCard = ({
  data,
  index,
  maxWidth,
  last,
  active,
  onActionButtonClicked,
}: {
  data: any;
  index: number;
  maxWidth?: number;
  active?: boolean;
  last?: boolean;
  onActionButtonClicked?: () => void;
}) => {
  const { className, styles } = getStyles(maxWidth, last);
  const { name, credentials, slug, portraitImage } = data;

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        {portraitImage && (
          <Portrait image={portraitImage} size={PortraitSizes.small} />
        )}
        {!portraitImage && <div className="line" />}

        <h3>{name}</h3>
        <div className="label-medium">{credentials}</div>
        <SeeQuotesButton onClick={onActionButtonClicked} active={active} />
      </div>

      <style jsx>{`
        .label-medium {
          margin-bottom: 0.625rem;
        }
        h3 {
          margin: 0.625rem 0;
          margin-top: 1.25rem;
          margin-bottom: 0.625rem;
        }
        .tease-lede-small {
          text-align: center;
          margin-bottom: 0.625rem;
        }
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default FeaturedVoiceCard;
