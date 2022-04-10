import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

function getStyles() {
  return css.resolve`
    div {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background: linear-gradient(
        to left,
        var(--white) 0,
        rgba(0, 0, 0, 0) 90%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
    }
    @media only screen and (max-width: 768px) {
      div {
        display: none;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ShadowOverlay = ({ active }: { active: boolean }) => {
  const { className, styles } = getStyles();
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        animate={active ? 'in' : 'out'}
        variants={variants}
        className={className}
      />
      {styles}
    </>
  );
};

export default ShadowOverlay;
