import styles from './NavSectionHeader.module.css';

import classnames from 'classnames';
const cx = classnames.bind(styles);

const NavSectionHeader = ({ title, isNested = false, ...props }: any) => {
  return (
    <div
      className={cx(
        'sub-nav-link-md',
        styles.title,
        isNested ? styles.nested : styles.topLevel,
      )}
      {...props}
    >
      <span>{title}</span>
    </div>
  );
};

export default NavSectionHeader;
