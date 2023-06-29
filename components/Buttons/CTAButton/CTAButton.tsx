/**
 * Call to action button, used throughout the site.
 * Has two different themes (`backgroundColor`s): 'DARK' and 'black'.
 */
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
    newTab,
    icon,
  } = data;

  if (!label) return null;

  const LabelComponent = (
    <span className={styles.label}>
      {<Label size={labelSize} label={label} />}
      {icon}
    </span>
  );

  return (
    <button
      data-type={type}
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
        <a
          href={link}
          {...(newTab && { target: '__blank', rel: 'noopener noreferrer' })}
        >
          {LabelComponent}
        </a>
      ) : (
        LabelComponent
      )}
    </button>
  );
};

export default CTAButton;
