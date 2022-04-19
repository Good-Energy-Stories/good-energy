import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '.';
import { Tags } from './';
function getStyles(maxWidth, last) {
  return css.resolve`
    div {
      display: inline-block;
      width: 100%;
      max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      border-bottom: ${last ? '0' : '1px solid var(--blueThree)'};
    }
    @media only screen and (max-width: 768px) {
      div {
        max-width: none;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Small = ({
  data,
  last,
  maxWidth,
}: {
  data: ArticleCardData;
  last?: boolean;
  maxWidth?: number;
}) => {
  const { className, styles } = getStyles(maxWidth, last);

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
      <Link href={`/playbook/${slug}`}>
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
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Small;
