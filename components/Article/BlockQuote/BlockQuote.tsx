import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion, useInView } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import styles from './BlockQuote.module.css';
import classnames from 'classnames';
import { useRef } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
const cx = classnames.bind(styles);
const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => {
      return (
        <blockquote className={cx('block-quote', styles.blockquote)}>
          {children}
        </blockquote>
      );
    },
  },
};

const ArticleQuote = ({ data }: { data: any }) => {
  const { quote, attribution } = data;
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={FRAMER_TRANSITION_FASTEASE}
      >
        <PortableText value={quote} components={components} />
      </motion.div>
      {attribution && (
        <div className={styles.attribution}>
          <span className={styles.line} />
          <div className={cx('label-small', styles.name)}>{attribution}</div>
        </div>
      )}
    </div>
  );
};

export default ArticleQuote;
