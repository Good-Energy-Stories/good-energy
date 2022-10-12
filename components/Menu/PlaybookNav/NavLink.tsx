import Link from 'next/link';
import styles from './NavLink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const NavLink = ({ data, parentExpanded }) => {
  const { title, slug } = data;

  return (
    <li className={cx('nav-link-md', styles.container)}>
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
