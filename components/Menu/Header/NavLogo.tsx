import Link from 'next/link';
import Logo from './Logo';
import styles from './NavLogo.module.css';

const NavLogo = ({ theme, height }: any) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a style={{ height }}>
          <Logo height={height} />
        </a>
      </Link>
    </div>
  );
};

export default NavLogo;
