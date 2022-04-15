import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Filters from './Filters';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      margin: 0 1.25rem;
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

const ResultsFor = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchQuery, playbookSearchResults },
  } = store;

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={'out'}
      animate={playbookSearchResults.length !== 0 ? 'in' : 'out'}
      variants={variants}
      className={className}
    >
      <h1>{`Results for “${playbookSearchQuery}”`}</h1>
      <Filters />
      <style jsx>{`
        h1 {
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
});

export default ResultsFor;
