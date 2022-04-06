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
function getStyles(maxWidth, last) {
  return css.resolve`
    div {
      display: inline-block;
      height: 100%;
      width: 100%;
      max-width: ${maxWidth ? `${maxWidth}px` : 'none'};
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      border-bottom: ${last ? '0' : '1px solid var(--blueThree)'};
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
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

const CharacterProfileStandard = ({
  data,
  index,
  maxWidth,
  last,
}: {
  data: CharacterProfileData;
  index: number;
  maxWidth?: number;
  last?: boolean;
}) => {
  const { className, styles } = getStyles(maxWidth, last);
  const { name, shortBio, slug, portraitImage } = data;

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
        <div className="label-medium">{'Character Profile'}</div>
        <h3>{name}</h3>
        {shortBio && <div className="tease-lede-small">{shortBio}</div>}
        <SmallBorderCTAButton label="Read More" href={`/${slug}`} />
      </div>

      <style jsx>{`
        .label-medium {
          margin-top: 1.25rem;
          color: var(--blueThree);
        }
        h3 {
          margin: 0.625rem 0;
          margin-top: 0.625rem;
          margin-bottom: 0.625rem;
        }
        .tease-lede-small {
          text-align: center;
          margin-bottom: 0.625rem;
        }
        .layout {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfileStandard;
