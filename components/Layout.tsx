import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
function getStyles(paddingHorizontal) {
  return css.resolve`
    div {
      width: 100%;
      height: 100%;
      display: grid;
      padding: 0 ${paddingHorizontal ?? 0};
      grid-template-columns: var(--grid-col);
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0;
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

const Layout = observer(
  ({
    children,
    key,
    paddingHorizontal,
  }: {
    children: ReactChild[];
    key: Key;
    paddingHorizontal?: string;
  }) => {
    const { className, styles } = getStyles(paddingHorizontal);

    return (
      <motion.div
        key={key}
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        {children}
        {styles}
      </motion.div>
    );
  },
);

export default Layout;
