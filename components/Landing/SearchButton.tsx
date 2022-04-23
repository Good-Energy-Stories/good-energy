import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

export const SEARCH_BUTTON_WIDTH = 100;

const variants = {
  active: { x: 0 },
  inactive: { x: SEARCH_BUTTON_WIDTH + 12 },
};

function getStyles(color) {
  return css.resolve`
    button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border: none;
      padding: 15px 24px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 28px;
      width: ${SEARCH_BUTTON_WIDTH}px;
      cursor: pointer;
      z-index: 0;
      background-color: ${color ?? 'var(--pink)'};
    }
    @media only screen and (max-width: 768px) {
      div {
      }
    }
  `;
}
const SearchButton = ({
  active,
  color,
  onClick,
}: {
  active: boolean;
  color?: string;
  onClick: () => void;
}) => {
  const { className, styles } = getStyles(color);
  return (
    <>
      <motion.button
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        initial={'inactive'}
        animate={active ? 'active' : 'inactive'}
        className={className}
        onClick={onClick}
        type="button"
      >
        →
      </motion.button>
      {styles}
    </>
  );
};

export default SearchButton;
