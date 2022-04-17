import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ArticleCardStyle, Card } from '../Cards';

function getStyles() {
  return css.resolve`
    div {
      grid-column: 1/5;
      display: grid;
      grid-template-columns: var(--grid-col);
      margin-left: 0rem;
      padding: 2.5rem;
    }
    @media only screen and (max-width: 768px) {
      div {
        grid-column: 1/5;
        padding: 0 1.25rem;
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

const NextUp = ({ article }: { article }) => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="next-up-article">
        <Card
          content={article}
          last
          articleCardStyle={ArticleCardStyle.nextUp}
        />
      </div>
      <style jsx>{`
        .next-up-article {
          grid-column: 2/4;
        }
        @media only screen and (max-width: 768px) {
          .next-up-article {
            padding-top: 2.5rem;
            grid-column: 1/5;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default NextUp;
