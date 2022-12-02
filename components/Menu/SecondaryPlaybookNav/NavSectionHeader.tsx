import styles from './NavSectionHeader.module.css';

import classnames from 'classnames';

const cx = classnames.bind(styles);

const NavSectionHeader = ({ title, className, ...props }) => {
  return (
    <div className={cx('sub-nav-link-md', styles.title, className)} {...props}>
      <span>{title}</span>
    </div>
  );
};

export default NavSectionHeader;
