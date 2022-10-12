import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '../';
import { Tags } from '../';

function getStyles(wide) {
  return css.resolve`
    div {
      display: inline-block;
      width: ${wide ? 'calc(100% + 10rem)' : '100%'};
      margin: ${wide ? '0 -5rem' : '0'};
      margin-bottom: 2.5rem;
      border-top: 4px solid var(--black);
    }
    @media only screen and (max-width: 768px) {
      div {
        margin: 0;
        width: 100%;
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
              <div className="label-small">Article</div>
              <Title title={title} />
              {lede && <Lede lede={lede} />}
              {tags && <Tags tags={tags} truncateTags={false} />}
            </div>
            {heroImage && (
              <div className="right">
                <Banner image={heroImage} />
              </div>
            )}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .label-small {
          color: var(--blueThree);
          text-transform: uppercase;
        }
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
        @media only screen and (max-width: 768px) {
          .right {
            margin-bottom: 0.625rem;
          }
          .layout {
            display: flex;
            flex-direction: column-reverse;
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Featured;
