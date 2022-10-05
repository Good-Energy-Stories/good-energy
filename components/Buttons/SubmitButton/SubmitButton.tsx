import styles from './SubmitButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum ButtonType {
  Fill = 'fill',
  Outline = 'outline',
}

const SubmitButton = ({ type = 'submit', label = 'Submit', ...props }: any) => {
  return (
    <button
      type={type}
      className={cx(
        styles.container,
        type === ButtonType.Fill && styles.fill,
        type === ButtonType.Outline && styles.outline,
      )}
      {...props}
    >
      <div className={cx('h3', styles.label)}>{label}</div>
    </button>
  );
};

export default SubmitButton;
