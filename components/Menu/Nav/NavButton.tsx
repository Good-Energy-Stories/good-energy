import Link from 'next/link';
import styles from './NavButton.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
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
      className={cx('label-small', styles.button)}
    >
      <label className={styles.label}>
        {playbookNavOverlayOpen ? 'Hide Contents' : 'Show Contents'}
      </label>
      <motion.svg
        animate={{ rotate: playbookNavOverlayOpen ? 0 : -180 }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path d="M13.0871 6.95137L11.9121 5.77637L6.91211 10.7764L11.9121 15.7764L13.0871 14.6014L9.27044 10.7764L13.0871 6.95137Z" />
      </motion.svg>
    </button>
  );
});

export default NavButton;
