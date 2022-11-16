import styles from './CloseButton.module.css';
import classnames from 'classnames';
import { useStore } from '../../../stores/store';
import { useUIStore } from '../../../providers/RootStoreProvider';
const cx = classnames.bind(styles);

const CloseButton = () => {
  const { togglePlaybookNavOverlay } = useUIStore();
  const handleClick = () => {
    togglePlaybookNavOverlay();
  };
  return (
    <>
      <button
        className={cx('label-medium', styles.button)}
        onClick={handleClick}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0003 3.33301L11.1753 4.50801L6.52533 9.16634H16.667V10.833H6.52533L11.1753 15.4913L10.0003 16.6663L3.33366 9.99967L10.0003 3.33301Z"
            fill="#2FBDF4"
          />
        </svg>

        <label className={styles.label}>Hide Contents</label>
      </button>
    </>
  );
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
