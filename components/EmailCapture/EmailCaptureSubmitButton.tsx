import { motion } from 'framer-motion';

import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
import EmailCaptureSubmitButtonInner from './EmailCaptureSubmitButtonInner';
import styles from './EmailCaptureSubmitButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const variants = {
  submitted: {
    width: '100%',
    backgroundColor: 'var(--yellow)',
  },
  unsubmitted: {
    width: '20%',
    backgroundColor: 'var(--pink)',
  },
};

const EmailCaptureSubmitButton = ({
  onClick,
  submitted,
}: {
  onClick: any;
  submitted: boolean;
}) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'unsubmitted'}
      animate={submitted ? 'submitted' : 'unsubmitted'}
      variants={variants}
      className={cx(styles.container, submitted && styles.submitted)}
      onClick={onClick}
    >
      <EmailCaptureSubmitButtonInner submitted={submitted} />
    </motion.div>
  );
};

export default EmailCaptureSubmitButton;
