import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '.';
import { SmallBorderCTAButton } from '../';
import { Tags } from './';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    max-width: 228px;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--blueThree);
    height: 100%;
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

const Small = ({ data }: { data: ArticleCardData }) => {
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
      <div className="article-link">
        {heroImage && <Banner image={heroImage} />}
        {!heroImage && <div className="line" />}
        <Title title={title} />
        <SmallBorderCTAButton label="Read More" href={`/playbook/${slug}`} />
      </div>

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
