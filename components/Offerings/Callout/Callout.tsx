import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../..';
import { PortableText } from '@portabletext/react';

import styles from './Callout.module.css';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Callout = ({ data, className }: any) => {
  const { title, information } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div ref={ref} className={cx(styles.container, className)}>
      <h3 className={styles.title}>{title}</h3>
      <motion.div
        variants={variants}
        animate={inView ? 'in' : 'out'}
        transition={FRAMER_TRANSITION_EASEOUT}
        className={styles.description}
      >
        <PortableText value={information} components={PortableTextSerializer} />
      </motion.div>
    </div>
  );
};

export default Callout;
