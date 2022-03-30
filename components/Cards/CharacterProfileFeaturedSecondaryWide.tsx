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
const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: calc(100% + 10rem);
    margin: 0 -5rem;
    margin-bottom: 2.5rem;
    border-top: 4px solid var(--black);
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

const CharacterProfileFeaturedSecondaryWide = ({
  data,
  index,
}: {
  data: CharacterProfileData;
  index: number;
}) => {
  const { name, shortBio, slug, portraitImage, tags } = data;

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
              {portraitImage && (
                <Portrait
                  image={portraitImage}
                  size={PortraitSizes.extraLarge}
                />
              )}
            </div>
            <div className="right">
              <FeaturedTag suffix={'Character Profile'} />
              <Name name={name} />
              {shortBio && <Bio bio={shortBio} />}
              {tags && <Tags tags={tags} />}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .article-link {
        }

        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
        .layout {
          margin-top: 1.25rem;

          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 1.25rem;
        }
        .left {
          grid-column: 1/2;
          display: flex;
          justify-content: flex-start;
        }
        .right {
          grid-column: 2/3;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfileFeaturedSecondaryWide;
