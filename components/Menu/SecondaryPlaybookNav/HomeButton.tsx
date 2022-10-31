import styles from './HomeButton.module.css';
import classnames from 'classnames';
import { useStore } from '../../../stores/store';
import Link from 'next/link';
const cx = classnames.bind(styles);

const HomeButton = () => {
  return (
    <>
      <Link href={'/playbook'}>
        <a>
          <button className={cx('sub-nav-link-md', styles.button)}>
            Playbook Home
          </button>
        </a>
      </Link>
    </>
  );
};

export default HomeButton;
