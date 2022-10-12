import Link from 'next/link';
import styles from './PlaybookControl.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useStore } from '../../../stores/store';
import NavButton from './NavButton';
const cx = classnames.bind(styles);

const PlaybookControl = () => {
  return (
    <div className={styles.container}>
      <label className={cx('nav-link-md', styles.label)}>
        <svg
          width="29"
          height="22"
          viewBox="0 0 29 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.008 19.848C19.008 17.8 19.392 16.136 20.16 14.856C20.928 13.56 22.112 12.72 23.712 12.336V11.976H0V9.96H23.712V9.576C22.112 9.208 20.928 8.376 20.16 7.08C19.392 5.784 19.008 4.12 19.008 2.088V0H21.096V2.064C21.096 3.776 21.384 5.208 21.96 6.36C22.552 7.512 23.368 8.368 24.408 8.928C25.448 9.472 26.656 9.744 28.032 9.744V12.168C26.656 12.168 25.448 12.448 24.408 13.008C23.368 13.552 22.552 14.4 21.96 15.552C21.384 16.704 21.096 18.136 21.096 19.848V21.888H19.008V19.848Z"
            fill="#2FBDF4"
          />
        </svg>
        <Link href="/playbook" passHref>
          <a className={styles.link}>Playbook</a>
        </Link>
      </label>
      <NavButton />
    </div>
  );
};

export default PlaybookControl;
