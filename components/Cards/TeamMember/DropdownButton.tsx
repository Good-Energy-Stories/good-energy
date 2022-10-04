import styles from './DropdownButton.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
const cx = classnames.bind(styles);
const DropdownButton = ({ onClick, expanded }) => {
  const label = expanded ? 'Hide Bio' : 'Show Bio';
  return (
    <button
      aria-expanded={expanded ? 'true' : 'false'}
      onClick={onClick}
      className={cx('label-medium', styles.button)}
    >
      {label}
      <motion.svg
        animate={{ rotate: expanded ? 180 : 0 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path d="M7 9.49976L12 14.4998L17 9.49976H7Z" />
      </motion.svg>
    </button>
  );
};

export default DropdownButton;
