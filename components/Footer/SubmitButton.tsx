import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import SubmitButtonInner from './SubmitButtonInner';
const { className, styles } = css.resolve`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  submitted: {
    backgroundColor: 'var(--yellow)',
    width: '100%',
  },
  unsubmitted: {
    backgroundColor: 'var(--blueFour)',
    width: '30%',
  },
};

const SubmitButton = ({ formSubmitted }) => {
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        initial={'unsubmitted'}
        animate={formSubmitted ? 'submitted' : 'unsubmitted'}
        className={className}
      >
        <SubmitButtonInner formSubmitted={formSubmitted} />
      </motion.div>
      {styles}
      <style jsx>{`
        .success-message {
          color: var(--black);
        }
      `}</style>
    </>
  );
};

export default SubmitButton;
