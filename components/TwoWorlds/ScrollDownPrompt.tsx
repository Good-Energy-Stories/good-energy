import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import DownArrowIcon from '../../public/down-arrow.svg';

function getStyles() {
  return css.resolve`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      grid-column: 1/-1;
      height: 30px;
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

const ScrollDownPrompt = () => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="label-medium">Scroll</div>
      <span className="arrow">
        <DownArrowIcon />
      </span>

      <style jsx>{`
        .label-medium {
          position: relative;
        }
        .arrow {
          animation: MoveUpDown 3s linear infinite;
        }

        @keyframes MoveUpDown {
          0%,
          100% {
            padding-top: 15px;
          }
          50% {
            padding-top: 5px;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ScrollDownPrompt;
