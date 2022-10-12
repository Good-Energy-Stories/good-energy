import styles from './HomeButton.module.css';
import classnames from 'classnames';
import { useStore } from '../../../stores/store';
import Link from 'next/link';
const cx = classnames.bind(styles);

const HomeButton = () => {
  return (
    <>
      <button className={cx('sub-nav-link-md', styles.button)}>
        <Link href={'/playbook'}>
          <a>Playbook Home</a>
        </Link>
      </button>
    </>
  );
};

export default HomeButton;
