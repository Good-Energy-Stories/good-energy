import { motion } from 'framer-motion';
import styles from './CTAButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum ButtonType {
  Fill = 'fill',
  Outline = 'outline',
}

const CTAButton = ({ data }: any) => {
  const { label, type = ButtonType.Outline, link, backgroundColor } = data;
  return (
    <button
      data-theme={backgroundColor}
      className={cx(
        styles.container,
        type === ButtonType.Fill && styles.fill,
        type === ButtonType.Outline && styles.outline,
      )}
    >
      <a href={link} className={cx('h3', styles.label)}>
        {label}
      </a>
    </button>
  );
};

export default CTAButton;
