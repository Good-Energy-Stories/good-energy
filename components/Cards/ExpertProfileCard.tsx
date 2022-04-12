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
} from './ExpertProfileCardComponents';
import { PortraitSizes, RoundPortrait } from './CharacterProfileCardComponents';
import { Tags } from '.';
import CTAButton from '../CTAButton';
function getStyles(last, marginBottom) {
  return css.resolve`
    div {
      display: inline-block;

      width: 100%;

      margin-bottom: ${marginBottom ?? '3.75rem'};

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
  const {
    name,
    includeSpotlightPage,
    shortBio,
    slug,
    smallPortraitImage,
    tags,
    pronouns,
    organization,
  } = data;
  const { className, styles } = getStyles(last, marginBottom);
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
          {smallPortraitImage && (
            <div>
              <Portrait
                image={smallPortraitImage}
                size={PortraitSizes.medium}
              />
            </div>
          )}
        </div>
        <div className="right">
          <Name name={name} />
          <PronounsAndOrganization
            pronouns={pronouns}
            organization={organization}
          />
          {shortBio && <Bio bio={shortBio} />}
          {includeSpotlightPage && (
            <div className="cta">
              <CTAButton
                label="Read More"
                href={`/about/library-of-experts/spotlight/${slug}`}
              />
            </div>
          )}
          {tags && <Tags tags={tags} />}
        </div>
      </div>

      <style jsx>{`
        .cta {
          margin-bottom: 1.25rem;
        }

        .layout {
          margin-top: 1.25rem;

          display: grid;

          column-gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .left {
          grid-column: 1/2;
          margin-right: 1.25rem;
        }
        .right {
          grid-column: 2/3;
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
