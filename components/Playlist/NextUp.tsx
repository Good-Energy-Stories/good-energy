import { AnimatePresence, motion } from 'framer-motion';
import css from 'styled-jsx/css';

import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import { ArticleCardStyle, Card, CharacterProfileCardStyle } from '../Cards';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfileCard';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    padding-top: 1.25rem;
    width: 100%;
    margin-bottom: 5rem;
    padding-bottom: 0;
    grid-column: 2/4;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
      padding: 0 1.25rem;
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

const NextUp = ({ data, onClick }: { data: any; onClick: () => void }) => {
  const { title, lede, tags, slug } = data;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={title}
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        whileHover={{ opacity: 0.8 }}
        variants={variants}
        className={className}
      >
        <Card
          content={data}
          onActionButtonClicked={onClick}
          articleCardStyle={ArticleCardStyle.nextUp}
          characterProfileCardStyle={CharacterProfileCardStyle.nextUp}
          expertProfileCardStyle={ExpertProfileCardStyle.nextUp}
        />

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
    </AnimatePresence>
  );
};

export default NextUp;
