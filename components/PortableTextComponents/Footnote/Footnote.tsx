import styles from './Footnote.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Footnote = ({ value, children }: any) => {
  const { number } = value;
  return (
    <span className={cx('body-footnote')}>
      {children}

      <sup className={styles.sup}>{number}</sup>
    </span>
  );
};
export default Footnote;
