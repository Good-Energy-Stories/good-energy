import { AnimatePresence, motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

function getStyles() {
  return css.resolve`
    div {
      grid-column: 1/5;

      display: grid;
      grid-template-columns: var(--grid-col);
    }
    @media only screen and (max-width: 768px) {
      div {
      }
    }
  `;
}

const variants = {
  initial: (direction) => ({
    opacity: 0,
  }),
  enter: {
    opacity: 1,
  },
  exit: (direction) => ({
    opacity: 0,
  }),
};

const PageContentWrapper = ({ children, direction, key }) => {
  const { className, styles } = getStyles();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={key}
          transition={FRAMER_TRANSITION_EASEOUT}
          initial={'initial'}
          animate={'enter'}
          exit={'exit'}
          variants={variants}
          className={className}
          custom={direction}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {styles}
    </>
  );
};

export default PageContentWrapper;
