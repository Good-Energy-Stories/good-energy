import styles from './Nav.module.css';
import NavList from './NavList';

const Nav = ({ data }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.col}>
        <h3 className={styles.title}>About</h3>
        <NavList contents={data?.about} />
      </div>
      <div className={styles.col}>
        <h3 className={styles.title}>Offerings</h3>
        <NavList contents={data?.offerings} />
      </div>
    </nav>
  );
};

export default Nav;
