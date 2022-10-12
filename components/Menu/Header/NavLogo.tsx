import Link from 'next/link';
import Logo from './Logo';
import styles from './NavLogo.module.css';

import { dark, NavBarStyle } from '../../StickyNavBar';

const NavLogo = ({ theme = dark, height }: any) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a style={{ height }}>
          <Logo
            height={height}
            textColor={theme.logoTextColor}
            backgroundColor={theme.logoBackgroundColor}
          />
        </a>
      </Link>
    </div>
  );
};

export default NavLogo;
