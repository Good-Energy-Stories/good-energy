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
const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
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
const CharacterProfileCard = ({
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
      <Link href={`/${slug}`}>
        <a>
          <div className="article-link">
            {portraitImage && <Portrait image={portraitImage} />}
            {!portraitImage && <div className="line" />}
            <Name name={name} />
            {shortBio && <Bio bio={shortBio} />}
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
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfileCard;
