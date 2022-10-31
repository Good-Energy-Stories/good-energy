import { motion, useInView } from 'framer-motion';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import styles from './Illustration.module.css';
import { useRef } from 'react';
const variants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const Illustration = ({ data }: { data: any }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  if (!data) return null;
  return (
    <motion.div
      ref={ref}
      transition={{ ...FRAMER_TRANSITION_EASEOUT, duration: 2 }}
      initial={'out'}
      animate={inView ? 'in' : 'out'}
      exit={'out'}
      variants={variants}
      className={styles.container}
    >
      <img
        className={styles.image}
        alt={data?.caption}
        src={imageUrlFor(data).width(1000).url()}
      />
    </motion.div>
  );
};

export default Illustration;
