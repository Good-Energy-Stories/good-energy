import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede, Tags } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData, FeaturedTag } from './';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
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
          <div className="layout">
            <div className="left">
              <FeaturedTag />
              <Title title={title} />
              {lede && <Lede lede={lede} />}
              {tags && <Tags tags={tags} />}
            </div>
            <div className="right">
              {heroImageUrl && <Banner src={heroImageUrl} />}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .layout {
          margin-top: 1.25rem;

          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 1.25rem;
        }
        .left {
          grid-column: 1/2;
        }
        .right {
          grid-column: 2/3;
        }

        .line {
          width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Featured;
