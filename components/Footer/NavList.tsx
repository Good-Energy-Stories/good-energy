import NavLink from './NavLink';
import styles from './NavList.module.css';

const NavList = ({ contents }) => {
  return (
    <ul className={styles.container}>
      {contents?.map((item, index) => (
        <NavLink key={index} data={item} />
      ))}
    </ul>
  );
};

export default NavList;
