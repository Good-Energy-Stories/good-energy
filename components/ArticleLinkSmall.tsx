import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Banner, Title, Lede, Tags } from './ArticleLink';
import Link from 'next/link';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    margin-top: 1.25rem;
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

const ArticleLinkSmall = ({
  imageSrc,
  title,
  lede,
  tags,
  href,
}: {
  imageSrc?: string;
  title: string;
  lede?: string;
  tags?: string[];
  href: string;
}) => {
  if (!title || !href) return null;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Link href={href}>
        <div className="article-link">
          {imageSrc && <Banner imageSrc={imageSrc} />}
          {!imageSrc && <div className="line" />}
          <Title title={title} />
          {lede && <Lede lede={lede} />}
          {tags && <Tags tags={tags} />}
        </div>
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

export default ArticleLinkSmall;
