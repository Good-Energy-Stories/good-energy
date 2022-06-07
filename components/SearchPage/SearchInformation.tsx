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
import SearchInfo from './SearchResultsFor';
import SearchResultsFor from './SearchResultsFor';
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

const SearchInformation = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchLoading },
  } = store;

  return (
    <AnimatePresence exitBeforeEnter>
      {playbookSearchLoading ? <SearchLoader /> : <SearchResultsFor />}
    </AnimatePresence>
  );
});

export default SearchInformation;
