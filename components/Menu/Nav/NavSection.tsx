import { motion } from 'framer-motion';
import NavItem from './NavItem';
import styles from './NavSection.module.css';

const NavSection = ({ title, contents }) => {
  return (
    <>
      <ul className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        {contents?.map((item, index) => (
          <NavItem key={index} data={item} />
        ))}
      </ul>
    </>
  );
};

export default NavSection;
