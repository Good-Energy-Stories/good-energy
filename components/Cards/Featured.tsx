import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede, Tags } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from './';
import FeaturedTag from './FeaturedTag';

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

const Featured = ({ data }: { data: ArticleCardData }) => {
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
            <div className="featured-tag">
              <FeaturedTag />
            </div>
            {heroImageUrl && <Banner src={heroImageUrl} />}
            {!heroImageUrl && <div className="line" />}
            <Title title={title} />
            {lede && <Lede lede={lede} />}
            {tags && <Tags tags={tags} />}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .featured-tag {
          margin-bottom: 0.625rem;
        }
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

export default Featured;
