import styles from './CloseButton.module.css';
import classnames from 'classnames';
import { useStore } from '../../../stores/store';
import { useUIStore } from '../../../providers/RootStoreProvider';
const cx = classnames.bind(styles);

const CloseButton = () => {
  const { toggleNavOverlay } = useUIStore();
  const handleClick = () => {
    toggleNavOverlay();
  };

  return (
    <>
      <button
        className={cx('label-medium', styles.button)}
        onClick={handleClick}
      >
        <svg
          className={styles.icon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8337 5.34199L14.6587 4.16699L10.0003 8.82533L5.34199 4.16699L4.16699 5.34199L8.82533 10.0003L4.16699 14.6587L5.34199 15.8337L10.0003 11.1753L14.6587 15.8337L15.8337 14.6587L11.1753 10.0003L15.8337 5.34199Z" />
        </svg>
        <label className={styles.label}>Close Menu</label>
      </button>
    </>
  );
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
