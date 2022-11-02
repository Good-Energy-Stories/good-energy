import { motion } from 'framer-motion';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import SubmitButtonInner from './SubmitButtonInner';
import styles from './SubmitButton.module.css';

export const SUBMIT_BUTTON_HEIGHT = 80;

const variants = {
  submitted: {
    backgroundColor: 'var(--yellow)',
    width: '100%',
  },
  hover: {
    backgroundColor: 'var(--pink)',
  },
  unsubmitted: {
    backgroundColor: 'var(--blueFour)',
    width: '30%',
  },
};

const SubmitButton = ({ formSubmitted }) => {
  return (
    <>
      <motion.button
        style={{ height: SUBMIT_BUTTON_HEIGHT }}
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        initial={'unsubmitted'}
        animate={formSubmitted ? 'submitted' : 'unsubmitted'}
        whileHover={formSubmitted ? 'submitted' : 'hover'}
        className={styles.button}
      >
        <SubmitButtonInner formSubmitted={formSubmitted} />
      </motion.button>
    </>
  );
};

export default SubmitButton;
