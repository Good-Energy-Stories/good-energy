import { motion } from 'framer-motion';
import styles from './CTALink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const CTALink = ({ data, className }: any) => {
  const { label, link } = data;

  return (
    <div className={cx(styles.container, className)}>
      <a href={link} className={cx('h4', styles.label)}>
        {label}
      </a>
    </div>
  );
};

export default CTALink;
