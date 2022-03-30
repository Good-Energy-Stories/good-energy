import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import { Tags } from './';
import Link from 'next/link';
import { ArticleCardData } from '.';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
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

const Standard = ({ data }: { data: ArticleCardData }) => {
  const { title, lede, tags, slug, heroImage } = data;
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
            {heroImage && <Banner image={heroImage} />}
            {!heroImage && <div className="line" />}
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
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Standard;
