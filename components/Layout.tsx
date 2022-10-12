import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Key } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';

function getStyles(paddingHorizontal) {
  return css.resolve`
    div {
      width: 100%;
      height: 100%;

      min-height: 60vh;
      display: grid;
      padding: 0 ${paddingHorizontal ?? 0};
      padding-top: var(--header-height);
      grid-template-rows: auto;
      grid-template-columns: var(--grid-col);
      row-gap: 0;
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
    children: any[];
    key: Key;
    paddingHorizontal?: string;
  }) => {
    const { className, styles } = getStyles(paddingHorizontal);

    return (
      <motion.div
        key={key}
        transition={FRAMER_TRANSITION_EASEOUT}
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
