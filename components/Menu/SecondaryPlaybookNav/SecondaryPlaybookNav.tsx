import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import useIsPlaybook from '../../../utils/useIsSecondMenuActive';
import HomeButton from './HomeButton';
import NavItem from './NavItem';
import styles from './SecondaryPlaybookNav.module.css';

const SecondaryPlaybookNav = forwardRef<HTMLElement, any>(({ data }, ref) => {
  const isPlaybook = useIsPlaybook();
  if (!isPlaybook) return null;
  return (
    <>
      <nav ref={ref} className={styles.container}>
        <HomeButton />
        <div className={styles.main}>
          <ul className={styles.inner}>
            {data?.map((item, index) => (
              <NavItem key={index} data={item} depth={0} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
});

SecondaryPlaybookNav.displayName = 'SecondaryPlaybookNav';

export default SecondaryPlaybookNav;
