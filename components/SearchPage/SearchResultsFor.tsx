import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { PLAYBOOK_NAV_HEIGHT } from '..';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Filters from './Filters';
import SearchLoader from './SearchLoader';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEREASE,
} from '../../lib/framer/framer-animations';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
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

const SearchResultsFor = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookLastSearchedQuery, playbookSearchResults },
  } = store;
  if (playbookSearchResults === null) return null;
  const status = playbookSearchResults.length === 0 ? 'No Results' : 'Results';
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h1>{`${status} for “${playbookLastSearchedQuery}”`}</h1>
      {playbookSearchResults.length !== 0 && <Filters />}
      <style jsx>{`
        h1 {
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
});

export default SearchResultsFor;
