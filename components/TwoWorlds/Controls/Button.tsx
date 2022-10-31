import { motion } from 'framer-motion';
import styles from './Button.module.css';
import classnames from 'classnames';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEREASE,
} from '../../../lib/framer/framer-animations';
const cx = classnames.bind(styles);

const variants = {
  active: {
    opacity: 1,
    transition: FRAMER_TRANSITION_FASTEREASE,
  },
  inactive: {
    opacity: 0,
    transition: FRAMER_TRANSITION_FASTEREASE,
  },
};

const Button = ({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick: () => void;

  className?: string;
}) => {
  return (
    <motion.button
      variants={variants}
      animate={'active'}
      transition={FRAMER_TRANSITION_EASEOUT}
      className={cx(styles.container, 'button-text-large', className)}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
