import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
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

const NoResults = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchQuery },
  } = store;
  return (
    <motion.div
      key="no-results"
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h1>{`No Results for "${playbookSearchQuery}"`}</h1> {styles}
    </motion.div>
  );
});

export default NoResults;
