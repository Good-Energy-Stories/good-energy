import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Banner, Title, Lede, Tags } from './ArticleCardComponents';
import Link from 'next/link';
import imageUrlFor from '../../utils/imageUrlFor';
const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    margin-bottom: 1.25rem;
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

interface ImageAsset {}

interface ArticleCardData {
  title: string;
  lede: string;
  tags: string[];
  slug: string;
  heroImageUrl: string;
}
const ArticleCard = ({
  data,
  index,
}: {
  data: ArticleCardData;
  index: number;
}) => {
  const { title, lede, tags, slug, heroImageUrl } = data;

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
            {heroImageUrl && <Banner src={heroImageUrl} />}
            {!heroImageUrl && <div className="line" />}
            <Title title={title} />
            {lede && <Lede lede={lede} />}
            {tags && <Tags tags={tags} />}
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

export default ArticleCard;
