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
        className={cx('label-small', styles.button)}
        onClick={handleClick}
      >
        {'← Close Menu'}
      </button>
    </>
  );
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
