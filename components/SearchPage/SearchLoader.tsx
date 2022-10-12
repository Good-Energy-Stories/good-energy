import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key, useMemo, useState, useEffect } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Filters from './Filters';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
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

const useAnimatingEllipse = () => {
  const intervalPeriod = 600;
  const [ellipse, setEllipse] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setEllipse(ellipse.length === 3 ? '' : ellipse + '.');
    }, intervalPeriod);
    return () => clearInterval(interval);
  }, [ellipse]);

  return ellipse;
};

const SearchLoader = observer(() => {
  const ellipse = useAnimatingEllipse();
  return (
    <motion.div
      key="search-loader"
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h1>{`Searching${ellipse}`}</h1> {styles}
    </motion.div>
  );
});

export default SearchLoader;
