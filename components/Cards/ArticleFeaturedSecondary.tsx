import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData, FeaturedTag } from '.';
import { Tags } from './';

function getStyles(wide) {
  return css.resolve`
    div {
      display: inline-block;
      width: ${wide ? 'calc(100% + 10 rem)' : '100%'};
      margin: ${wide ? '0 -5rem' : '0'};
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
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Featured = ({
  data,
  wide = false,
}: {
  data: ArticleCardData;
  wide?: boolean;
}) => {
  const { title, lede, tags, slug, heroImage } = data;
  const { className, styles } = getStyles(wide);

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
          <div className="layout">
            <div className="left">
              <FeaturedTag />
              <Title title={title} />
              {lede && <Lede lede={lede} />}
              {tags && <Tags tags={tags} />}
            </div>
            <div className="right">
              {heroImage && <Banner image={heroImage} />}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .layout {
          margin-top: 1.25rem;
          display: grid;

          column-gap: 1.25rem;
        }
        .left {
          grid-column: ${wide ? '2/3' : '1/2'};
          grid-row: 1;
        }
        .right {
          grid-column: ${wide ? '1/2' : '2/3'};
          grid-row: 1;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Featured;
