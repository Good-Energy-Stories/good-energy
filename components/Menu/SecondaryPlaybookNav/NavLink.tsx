import Link from 'next/link';
import styles from './NavLink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const NavLink = ({ data, parentExpanded }: any) => {
  const { title, slug } = data;

  return (
    <li className={cx('sub-nav-link-sm', styles.container)}>
      <Link href={`/playbook/${slug}`} passHref>
        <a
          className={styles.link}
          aria-expanded={parentExpanded ? 'true' : 'false'}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
