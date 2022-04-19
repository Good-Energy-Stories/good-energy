import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '.';
import FeaturedTag from './FeaturedTag';
import { Tags } from '.';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    padding-top: 1.25rem;
    width: 100%;
    margin-bottom: 1.25rem;
    padding-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    div {
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

const NextUp = ({ data }: { data: ArticleCardData }) => {
  const { title, lede, tags, slug, heroImage } = data;

  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      whileHover={{ opacity: 0.8 }}
      variants={variants}
      className={className}
    >
      <Link href={`/playbook/${slug}`}>
        <a>
          <div className="article-link">
            <div className="featured-tag">Next Up</div>

            <h2>{title} </h2>
            <div className="layout tease-lede">{lede}</div>

            {tags && <Tags tags={tags} />}
          </div>
        </a>
      </Link>

      <style jsx>{`
        h2 {
          margin: 0;
          margin-bottom: 0.625rem;
        }
        .tease-lede {
          margin-bottom: 0.625rem;
        }
        .featured-tag {
          margin-bottom: 0.625rem;
          color: var(--blueThree);
          text-transform: uppercase;
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

export default NextUp;
