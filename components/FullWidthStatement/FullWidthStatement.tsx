import styles from './FullWidthStatement.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const FullWidthStatement = ({ data }: any) => {
  const { content, marginBottom, backgroundColor } = data;
  return (
    <div
      data-theme={backgroundColor}
      data-hide-quote-marks
      className={cx(
        'quote-xl',
        styles.container,
        marginBottom && styles.marginBottom,
      )}
    >
      {content}
    </div>
  );
};

export default FullWidthStatement;
