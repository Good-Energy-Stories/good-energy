import { motion } from 'framer-motion';
import styles from './CTALink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const CTALink = ({ data }: any) => {
  const { label, link } = data;

  return (
    <div className={styles.container}>
      <a href={link} className={cx('h4', styles.label)}>
        {label}
      </a>
    </div>
  );
};

export default CTALink;
