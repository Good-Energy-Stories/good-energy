import { motion } from 'framer-motion';

import NavSection from './NavSection';
import styles from './Nav.module.css';
import { forwardRef } from 'react';
import Link from 'next/link';
import CloseButton from './CloseButton';

const Nav = forwardRef<HTMLElement, any>(({ data }, ref) => {
  return (
    <nav ref={ref} className={styles.container}>
      <CloseButton />
      <h3 className={styles.title}>
        <Link href="/" passHref>
          <a className={styles.link}>Home</a>
        </Link>
      </h3>

      <ul className={styles.inner}>
        <NavSection title="Offerings" contents={data?.offerings} />
        <NavSection title="About" contents={data?.about} />
      </ul>
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;
