import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import {
  Name,
  Bio,
  Portrait,
  PronounsAndOrganization,
  Links,
} from './ExpertProfileCardComponents';
import { PortraitSizes, RoundPortrait } from './CharacterProfileCardComponents';
import { Tags } from '.';
import CTAButton from '../CTAButton';
import { PortableText } from '@portabletext/react';
function getStyles(last, marginBottom) {
  return css.resolve`
    div {
      display: inline-block;

      width: 100%;

      margin-bottom: ${marginBottom ?? '1.25rem'};

      max-width: 800px;
      border-bottom: ${last ? 0 : '1px solid var(--blueThree)'};
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;
        margin-bottom: 1.25rem;
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

const Card = ({
  data,
  index,
  last,
  marginBottom,
}: {
  data: any;
  index: number;
  last?: boolean;
  marginBottom?: string;
}) => {
  const { name, bio, portraitImage, pronouns, links } = data;
  const { className, styles } = getStyles(last, marginBottom);

  const getColor = (i) => {
    const colors = ['var(--yellow)', 'var(--pink)', 'var(--blueFour)'];
    return colors[i % colors.length];
  };
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
        <div className="left">
          {portraitImage && (
            <div>
              <Portrait
                image={portraitImage}
                size={PortraitSizes.medium}
                backgroundColor={getColor(index)}
              />
            </div>
          )}
        </div>
        <div className="right">
          <Name name={name} />
          <PronounsAndOrganization pronouns={pronouns} />
          <div className="tease-lede-small">
            <PortableText value={bio} />
          </div>
          {links && <Links links={links} />}
        </div>
      </div>

      <style jsx>{`
        .cta {
          margin-bottom: 1.25rem;
        }

        .layout {
          margin-top: 1.25rem;

          display: flex;
          justify-content: flex-start;

          margin-bottom: 2.5rem;
        }
        .left {
          grid-column: 1/2;
          margin-right: 2.5rem;
        }
        .right {
          width: 100%;
          grid-column: 2/4;
        }
        @media only screen and (max-width: 768px) {
          .layout {
            margin-bottom: 0;
          }
          .left {
            margin-right: 0;
            display: flex;
            justify-content: center;
            margin-bottom: 2.5rem;
          }
          .layout {
            margin-bottom: 2.5rem;
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Card;
