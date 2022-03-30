import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Name, Bio, RoundPortrait } from './CharacterProfileCardComponents';
import Link from 'next/link';
import { PortraitSizes } from './CharacterProfileCardComponents';
import { SmallBorderCTAButton } from '../';
const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    border-bottom: 1px solid var(--blueThree);
    height: 100%;
    text-align: center;
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

interface CharacterProfileData {
  name: string;
  shortBio: string;
  slug: string;
  portraitImage: any;
}
const CharacterProfileReadMore = ({
  data,
  index,
}: {
  data: CharacterProfileData;
  index: number;
}) => {
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
      <div>
        {portraitImage && (
          <RoundPortrait image={portraitImage} size={PortraitSizes.medium} />
        )}
        {!portraitImage && <div className="line" />}
        <div className="label-medium">Character Profile</div>
        <Name name={name} />
        <SmallBorderCTAButton label="Read More" href={`/${slug}`} />
      </div>

      <style jsx>{`
        .label-medium {
          margin-top: 0.625rem;
          color: var(--blueThree);
        }
        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfileReadMore;
