import styles from './Statement.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Statement = ({ data }: any) => {
  const { content } = data;
  return (
    <div data-hide-quote-marks className={cx('quote-md', styles.container)}>
      {content}
    </div>
  );
};

export default Statement;
