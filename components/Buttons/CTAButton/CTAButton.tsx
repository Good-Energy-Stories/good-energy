import { motion } from 'framer-motion';
import styles from './CTAButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum ButtonType {
  Fill = 'fill',
  Outline = 'outline',
}

const CTAButton = ({ data, className }: any) => {
  const {
    label,
    type = ButtonType.Outline,
    link,
    backgroundColor,
    onClick,
    icon,
  } = data;

  if (!label) return null;

  const labelComponent = (
    <span>
      {label}
      {icon && <img className={styles.icon} src={icon} />}
    </span>
  );
  return (
    <button
      type={type}
      data-theme={backgroundColor}
      className={cx(
        styles.container,
        type === ButtonType.Fill && styles.fill,
        type === ButtonType.Outline && styles.outline,
        className,
      )}
      onClick={onClick && onClick}
    >
      {link ? (
        <a href={link} className={cx('h3', styles.label)}>
          {labelComponent}
        </a>
      ) : (
        <div className={cx('h3', styles.label)}> {labelComponent}</div>
      )}
    </button>
  );
};

export default CTAButton;
