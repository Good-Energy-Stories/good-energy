import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Key } from 'react';

function getStyles(paddingHorizontal) {
  return css.resolve`
    div {
      width: 100%;
      height: 100%;
      min-height: 60vh;
      display: grid;
      padding: 0 ${paddingHorizontal ?? 0};
      grid-template-rows: auto;
      grid-template-columns: var(--grid-col);
      column-gap: var(--spacing-medium);
      row-gap: 0;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0 var(--spacing-small);
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
