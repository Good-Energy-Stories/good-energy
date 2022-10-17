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

const ScrollDownPrompt = () => {
  const { className, styles } = getStyles();

  return (
    <div className={className}>
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
    </div>
  );
};

export default ScrollDownPrompt;
