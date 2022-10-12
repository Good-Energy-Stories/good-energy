import { motion } from 'framer-motion';
import {
  FRAMER_TRANSITION_FASTEASE,
  FRAMER_TRANSITION_FASTEREASE,
} from '../../lib/framer/framer-animations';
import { EMAIL_CAPTURE_INPUT_HEIGHT } from './EmailCapture';
import styles from './EmailCaptureSubmitButtonInner.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

const EmailCaptureSubmitButtonInner = ({
  submitted,
}: {
  submitted: boolean;
}) => {
  const variants = {
    submitted: {
      y: -1 * EMAIL_CAPTURE_INPUT_HEIGHT,
    },
    unsubmitted: {
      y: 0,
    },
    hover: {
      x: 5,
      opacity: 0.6,
      transition: FRAMER_TRANSITION_FASTEREASE,
    },
    tap: {
      x: 0,
      opacity: 0.4,
      transition: FRAMER_TRANSITION_FASTEREASE,
    },
  };

  return (
    <motion.div
      style={{ height: EMAIL_CAPTURE_INPUT_HEIGHT * 2 }}
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'unsubmitted'}
      animate={submitted ? 'submitted' : 'unsubmitted'}
      whileHover={'hover'}
      whileTap={'tap'}
      variants={variants}
      className={styles.container}
    >
      <div className={cx('label-large', styles.label)}>→</div>
      <div className={cx('label-medium', styles.label)}>
        {"You're Subscribed!"}
      </div>
    </motion.div>
  );
};

export default EmailCaptureSubmitButtonInner;
