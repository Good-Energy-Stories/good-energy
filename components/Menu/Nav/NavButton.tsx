import Link from 'next/link';
import styles from './NavButton.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { useUIStore } from '../../../providers/RootStoreProvider';
const cx = classnames.bind(styles);

const NavButton = observer(() => {
  const { playbookNavOverlayOpen, togglePlaybookNavOverlay } = useUIStore();
  return (
    <button
      aria-expanded={playbookNavOverlayOpen ? 'true' : 'false'}
      onClick={() => {
        togglePlaybookNavOverlay();
      }}
      className={cx('label-medium', styles.button)}
    >
      {playbookNavOverlayOpen ? 'Hide Contents' : 'Show Contents'}
      <motion.svg
        animate={{ rotate: playbookNavOverlayOpen ? 90 : -90 }}
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
});

export default NavButton;
