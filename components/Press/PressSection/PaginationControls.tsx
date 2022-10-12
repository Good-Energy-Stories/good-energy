import styles from './PaginationControls.module.css';
import classNames from 'classnames';
import { useIsSmall, useMediaQuery } from '../../../utils/useMediaQuery';
const cx = classNames.bind(styles);
const PaginationControls = ({
  activePageIndex,
  totalPages,
  onNextClick,
  onPrevClick,
}) => {
  const isSmall = useIsSmall();
  const desktopStatus = `Page ${activePageIndex + 1} of ${totalPages}`;
  const mobileStatus = `${activePageIndex + 1} / ${totalPages}`;
  const status = isSmall ? mobileStatus : desktopStatus;
  if (totalPages <= 1) return null;
  return (
    <div className={styles.container}>
      <button
        onClick={onPrevClick}
        className={cx('label-large', styles.button)}
        disabled={activePageIndex === 0}
      >
        <svg
          className={styles.caret}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.7049 7.91L14.2949 6.5L8.29492 12.5L14.2949 18.5L15.7049 17.09L11.1249 12.5L15.7049 7.91Z" />
        </svg>
        Prev
      </button>
      <div className={cx('label-large', styles.status)}>{status}</div>
      <button
        onClick={onNextClick}
        className={cx('label-large', styles.button)}
        disabled={activePageIndex === totalPages - 1}
      >
        Next
        <svg
          className={styles.caret}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.29508 7.91L9.70508 6.5L15.7051 12.5L9.70508 18.5L8.29508 17.09L12.8751 12.5L8.29508 7.91Z" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationControls;
