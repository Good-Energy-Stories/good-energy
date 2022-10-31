import styles from './ScrollDownPrompt.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const ScrollDownPrompt = () => {
  return (
    <div className={styles.container}>
      <div className={cx('label-medium', styles.title)}>Scroll</div>
      <svg
        className={styles.arrow}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 15L17.59 13.59L13 18.17V2H11V18.17L6.41 13.58L5 15L12 22L19 15Z" />
      </svg>
    </div>
  );
};

export default ScrollDownPrompt;
