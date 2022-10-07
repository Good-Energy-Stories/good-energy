import { motion } from 'framer-motion';
import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
import styles from './EmailCaptureErrorMessage.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const variants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

const EmailCaptureErrorMessage = ({
  errorMessage,
  errorControls,
}: {
  errorMessage: string;
  errorControls: any;
}) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'inactive'}
      animate={errorMessage ? 'active' : 'inactive'}
      variants={variants}
      className={styles.container}
    >
      <motion.div animate={errorControls}>
        <div className={cx('label-small', styles.label)}>{errorMessage}</div>
      </motion.div>
    </motion.div>
  );
};

export default EmailCaptureErrorMessage;
