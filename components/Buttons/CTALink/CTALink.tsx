import { motion } from 'framer-motion';
import styles from './CTALink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const CTALink = ({ data }: any) => {
  const { label } = data;

  return (
    <div className={styles.container}>
      <div className={cx('.h3', styles.lavel)}>{label}</div>
    </div>
  );
};

export default CTALink;
