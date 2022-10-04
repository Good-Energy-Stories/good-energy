import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../..';
import { PortableText } from '@portabletext/react';

import PageDivider from '../../PageDivider';
import styles from './Callout.module.css';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Callout = ({ data }) => {
  const { title, information } = data;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>
        <PortableText value={information} components={PortableTextSerializer} />
      </div>
    </div>
  );
};

export default Callout;
