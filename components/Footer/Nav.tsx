/**
 * Collapsing nav for sidebar and footer.
 */

import styles from './Nav.module.css';
import NavList from './NavList';

const Nav = ({ data }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.firstCol}>
        <h3 className="title">Offerings</h3>
        <NavList contents={data?.offerings} />
      </div>
      <div className={styles.secondCol}>
        <h3 className="title">About</h3>
        <NavList contents={data?.about} />
      </div>
    </nav>
  );
};

export default Nav;
