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
import { Tags, FeaturedTag } from '.';
import CTAButton from '../CTAButton';

function getStyles(wide) {
  return css.resolve`
    div {
      display: block;
      width: ${wide ? 'calc(100% + 10 rem)' : '100%'};
      margin: ${wide ? '0 -5rem' : '0'};
      margin-bottom: 2.5rem;
      margin-top: 0;
    }
    @media only screen and (max-width: 768px) {
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
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

const CharacterProfileFeaturedSecondary = ({
  data,
  index,
  wide = false,
}: {
  data: CharacterProfileData;
  index: number;
  wide?: boolean;
}) => {
  const { className, styles } = getStyles(wide);

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
        <div className="label-medium">Next Up</div>
        <div className="left">
          {portraitImage && (
            <Portrait image={portraitImage} size={PortraitSizes.medium} />
          )}
        </div>
        <div className="right">
          <div className="label-medium">{'Character Profile'} </div>
          <h2>{name}</h2>
          {shortBio && <div className="tease-lede">{shortBio}</div>}
          <div>
            <CTAButton
              label="Read More"
              href={`/playbook/characters/character-profiles/${slug}`}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
          margin-bottom: 0.625rem;
        }
        h2 {
          margin: 0.625rem 0;
        }
        .tease-lede {
          margin-bottom: 1.25rem;
        }

        .layout {
          margin-top: 1.25rem;

          display: grid;

          column-gap: 1.25rem;
        }
        .left {
          grid-column: 1/2;
          margin-right: 1.25rem;
        }
        .right {
          grid-column: 2/3;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media only screen and (max-width: 768px) {
          .left {
            margin-right: 0;
            display: flex;
            justify-content: center;
            margin-bottom: 1.25rem;
          }
          .layout {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfileFeaturedSecondary;
