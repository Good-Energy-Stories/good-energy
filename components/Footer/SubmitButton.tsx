import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import SubmitButtonInner from './SubmitButtonInner';
const { className, styles } = css.resolve`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 2.5rem;
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
      <motion.button
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        initial={'unsubmitted'}
        animate={formSubmitted ? 'submitted' : 'unsubmitted'}
        className={className}
      >
        <SubmitButtonInner formSubmitted={formSubmitted} />
      </motion.button>
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
