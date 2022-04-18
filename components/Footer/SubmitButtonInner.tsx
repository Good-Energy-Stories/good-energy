import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
const { className, styles } = css.resolve`
  div {
    height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  submitted: {
    y: -18,
  },
  unsubmitted: {
    y: 18,
  },
};

const SubmitButtonInner = ({ formSubmitted }) => {
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        animate={formSubmitted ? 'submitted' : 'unsubmitted'}
        className={className}
      >
        <input className="label-medium" type="submit" />
        <div className="label-medium success-message">
          {"You're Subscribed!"}
        </div>
      </motion.div>
      {styles}
      <style jsx>{`
        .label-medium {
          padding-top: 2px;
          line-height: 36px;
          height: 36px;
        }
        .success-message {
          color: var(--black);
        }
        input[type='submit'] {
          background-color: transparent;
          text-align: center;
          color: var(--black);
          border: 0;
          display: inline-block;
          width: 150px;

          text-transform: uppercase;
          float: right;
        }
      `}</style>
    </>
  );
};

export default SubmitButtonInner;
