import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    max-width: 765px;
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

const Tag = ({ tag }: { tag: String }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout tag">{tag}</div>

      <style jsx>{`
        .tag {
          border: 1px solid var(--blueThree);
          margin-right: 0.3125rem;
          margin-bottom: 0.3125rem;
        }
        .layout {
          padding: 0.3125rem 0.625rem;
        }
        .quote {
          margin-bottom: 0.625rem;
          position: relative;
        }
        .attribution {
          display: block;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Tag;
