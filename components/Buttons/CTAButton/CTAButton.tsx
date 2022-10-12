import { motion } from 'framer-motion';
import styles from './CTAButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum ButtonType {
  Fill = 'fill',
  Outline = 'outline',
}

export enum ButtonLabelSize {
  Small = 'small',

  Large = 'large',
}

const Label = ({ size, label }) => {
  switch (size) {
    case ButtonLabelSize.Small:
      return <div className={cx('h4', styles.label)}>{label}</div>;
    case ButtonLabelSize.Large:
      return <div className={cx('h3', styles.label)}>{label}</div>;
    default:
      return null;
  }
};

const CTAButton = ({ data, className }: any) => {
  const {
    label,
    labelSize = ButtonLabelSize.Large,
    type = ButtonType.Outline,
    link,
    backgroundColor,
    onClick,
    icon,
  } = data;

  if (!label) return null;

  const LabelComponent = (
    <span className={styles.label}>
      {<Label size={labelSize} label={label} />}
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
      {link ? <a href={link}>{LabelComponent}</a> : LabelComponent}
    </button>
  );
};

export default CTAButton;
