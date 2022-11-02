import { motion } from 'framer-motion';
import styles from './Dropdown.module.css';
import classnames from 'classnames';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';

const cx = classnames.bind(styles);
const variants = {
  active: {
    height: 'auto',
    opacity: 1,
    transition: {
      opacity: {
        ...FRAMER_TRANSITION_FASTEASE,
        delay: FRAMER_TRANSITION_FASTEASE.duration,
      },
    },
  },
  inactive: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        ...FRAMER_TRANSITION_FASTEASE,
        delay: FRAMER_TRANSITION_FASTEASE.duration,
      },
    },
  },
};

const Dropdown = ({ expanded, children }) => {
  return (
    <motion.div
      className={cx('body', styles.dropdown)}
      variants={variants}
      initial={'inactive'}
      style={{ pointerEvents: expanded ? 'all' : 'none' }}
      animate={expanded ? 'active' : 'inactive'}
    >
      <div className={styles.inner}>{children}</div>
    </motion.div>
  );
};

export default Dropdown;
