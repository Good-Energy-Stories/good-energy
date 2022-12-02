import { forwardRef, useState } from 'react';
import useSecondaryPlaybookNav from '../../../utils/useSecondaryPlaybookNav';
import HomeButton from './HomeButton';
import NavItem from './NavItem';
import styles from './SecondaryPlaybookNav.module.css';

const SecondaryPlaybookNav = forwardRef<HTMLElement, any>(({ data }, ref) => {
  const active = useSecondaryPlaybookNav();
  const [submenuExpanded, setSubmenuExpanded] = useState(false);
  if (!active) return null;
  return (
    <>
      <nav ref={ref} className={styles.container}>
        <HomeButton />
        <div className={styles.main}>
          <ul className={styles.inner} data-expanded={submenuExpanded}>
            {data?.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  data={item}
                  depth={0}
                  submenuExpanded={submenuExpanded}
                  setSubmenuExpanded={setSubmenuExpanded}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
});

SecondaryPlaybookNav.displayName = 'SecondaryPlaybookNav';

export default SecondaryPlaybookNav;
