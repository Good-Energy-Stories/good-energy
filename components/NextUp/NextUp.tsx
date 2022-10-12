import Link from 'next/link';
import styles from './NextUp.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const NextUp = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Link href={href} passHref>
          <a className={styles.link}>
            <div className={cx('label-medium', styles.label)}>Next Up</div>
            <div className={cx('h2', styles.title)}>{label}</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NextUp;
