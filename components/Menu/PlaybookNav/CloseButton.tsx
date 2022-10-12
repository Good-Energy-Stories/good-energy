import styles from './CloseButton.module.css';
import classnames from 'classnames';
import { useStore } from '../../../stores/store';
const cx = classnames.bind(styles);

const CloseButton = () => {
  const store = useStore();
  const {
    uiStore: { closePlaybookNavOverlay },
  } = store;
  const handleClick = () => {
    closePlaybookNavOverlay();
  };
  return (
    <>
      <button
        className={cx('label-small', styles.button)}
        onClick={handleClick}
      >
        {'← Back'}
      </button>
    </>
  );
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
