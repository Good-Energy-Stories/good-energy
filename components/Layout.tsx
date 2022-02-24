import Head from 'next/head';
import Image from 'next/image';
import sanity from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useMobxStores } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    padding: calc(2rem - ${DOT_HEIGHT}px) calc(2rem - ${DOT_WIDTH}px);
    display: grid;
    grid-template-rows: ${DOT_HEIGHT}px ${FIXED_ROW_HEIGHT} ${DOT_HEIGHT}px auto ${DOT_HEIGHT}px ${FIXED_ROW_HEIGHT} ${DOT_HEIGHT}px;
    grid-template-columns:
      ${DOT_WIDTH}px minmax(0, 1fr) ${DOT_WIDTH}px minmax(0, 1fr) ${DOT_WIDTH}px
      minmax(0, 1fr) ${DOT_WIDTH}px minmax(0, 1fr) ${DOT_WIDTH}px;

    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;
      grid-template-rows: ${MOBILE_DOT_HEIGHT}px ${MOBILE_FIXED_ROW_HEIGHT} ${MOBILE_DOT_HEIGHT}px auto ${MOBILE_DOT_HEIGHT}px ${MOBILE_FIXED_ROW_HEIGHT} ${MOBILE_DOT_HEIGHT}px;
      grid-template-columns:
        ${MOBILE_DOT_WIDTH}px calc(100% - ${MOBILE_DOT_WIDTH * 2}px)
        ${MOBILE_DOT_WIDTH}px;
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

const Layout = observer(({ children, pageInfo, key }) => {
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
});

export default Layout;
