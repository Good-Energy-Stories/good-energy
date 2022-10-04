import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../..';
import { PortableText } from '@portabletext/react';

import styles from './ClimateLensBlock.module.css';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ClimateLensBlock = ({ data }) => {
  const { information } = data;
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      variants={variants}
      className={styles.container}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <h3 className={styles.title}>The Climate Lens™️</h3>
          <div className={styles.image}></div>
        </div>
        <div className={styles.information}>
          <PortableText
            value={information}
            components={PortableTextSerializer}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ClimateLensBlock;
