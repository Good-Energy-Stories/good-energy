import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion, useInView } from 'framer-motion';
import styles from './Quote.module.css';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
import { useRef } from 'react';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ArticleQuote = ({ data }: { data: any }) => {
  const { quote } = data;
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={FRAMER_TRANSITION_FASTEASE}
      className={styles.container}
    >
      <q className="pull-quote">{quote}</q>
    </motion.div>
  );
};

export default ArticleQuote;
