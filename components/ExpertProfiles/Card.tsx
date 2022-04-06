import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Name, Bio, Portrait, PronounsAndOrganization } from './CardComponents';
import Link from 'next/link';
import { CharacterProfileData } from '../Cards/CharacterProfileCard';
import {
  PortraitSizes,
  RoundPortrait,
} from '../Cards/CharacterProfileCardComponents';
import { Tags } from '../Cards';
import CTAButton from '../CTAButton';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;

    margin-bottom: 1.25rem;
    padding-bottom: 2.5rem;
    max-width: 800px;
    border-bottom: 1px solid var(--blueThree);
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column-gap: 0;
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Card = ({ data, index }: { data: any; index: number }) => {
  const {
    name,
    shortBio,
    slug,
    smallPortraitImage,
    tags,
    pronouns,
    organization,
  } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Link href={`/${slug}`}>
        <a>
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
              <div className="cta">
                <CTAButton
                  label="Read More"
                  href={`/about/library-of-experts/spotlight/${slug}`}
                />
              </div>
              {tags && <Tags tags={tags} />}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .cta {
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
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Card;
