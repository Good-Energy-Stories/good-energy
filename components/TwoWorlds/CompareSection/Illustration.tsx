import { motion } from 'framer-motion';
import Photo from '../../Photo/Photo';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import styles from './Illustration.module.css';

const variants = {
  inactive: (direction) => ({
    x: direction * 100,
    opacity: 0,
  }),
  active: { x: 0, opacity: 1 },
};

const Illustration = ({
  data,
  active,
  direction,
}: {
  data: any;
  active: boolean;
  direction: 1 | -1;
}) => {
  return (
    <motion.div
      custom={{ direction }}
      transition={FRAMER_TRANSITION_EASEOUT}
      animate={active ? 'active' : 'inactive'}
      variants={variants}
      className={styles.container}
    >
      <Photo caption={data?.caption} photo={data} />
    </motion.div>
  );
};

export default Illustration;
