import { motion } from 'framer-motion';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Filters from './Filters';

import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import styles from './SearchResultsFor.module.css';

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
      className={styles.container}
    >
      <h1>{`${status} for “${playbookLastSearchedQuery}”`}</h1>
      {playbookSearchResults.length !== 0 && <Filters />}
    </motion.div>
  );
});

export default SearchResultsFor;
