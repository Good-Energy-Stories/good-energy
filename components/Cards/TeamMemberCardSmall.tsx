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
import { PortableText } from '@portabletext/react';
function getStyles(maxWidth, last) {
  return css.resolve`
    div {
      display: inline-block;
      height: 100%;
      width: 100%;
      max-width: ${maxWidth ? `${maxWidth}px` : 'none'};
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      text-align: center;
      border-bottom: ${last ? '0' : '1px solid var(--blueThree)'};
    }
    @media only screen and (max-width: 768px) {
      div {
        display: grid;
        max-width: none;
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
  data: any;
  index: number;
  maxWidth?: number;
  last?: boolean;
}) => {
  const { className, styles } = getStyles(maxWidth, last);
  const { name, bio, role, pronouns, slug, portraitImage } = data;

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
        <div className="portrait">
          {portraitImage && (
            <Portrait image={portraitImage} size={PortraitSizes.small} />
          )}
        </div>

        <h3>{name}</h3>

        <div className="label-medium">{pronouns}</div>
        {role && <div className="tease-lede-small">{role}</div>}
      </div>

      <style jsx>{`
        .portrait {
          margin-bottom: 1.25rem;
        }
        .label-medium {
          color: var(--blueThree);
        }
        .tease-lede-small {
          margin-top: 0.625rem;
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
