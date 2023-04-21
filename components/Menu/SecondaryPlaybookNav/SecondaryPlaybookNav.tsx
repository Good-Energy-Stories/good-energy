import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';
import useSecondaryPlaybookNav from '../../../utils/useSecondaryPlaybookNav';
import HomeButton from './HomeButton';
import NavItem from './NavItem';
import styles from './SecondaryPlaybookNav.module.css';

/*
  This function is used to get all the sections from a playbook.
  It is used to create the secondary nav.

  The function takes an array of sections and returns an array of sections.
  It will recursively call itself to get all the sections.
*/
function getSections(arr, depth = 0) {
  let sections = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._type === 'playbookSection' && !arr[i]._parentId) {
      sections.push(arr[i]);
    }
  }
  return sections;
}

const SecondaryPlaybookNav = forwardRef<HTMLElement, any>(({ data }, ref) => {
  const active = useSecondaryPlaybookNav();
  const router = useRouter();
  const [submenuExpanded, setSubmenuExpanded] = useState(false);
  if (!active) return null;

  const sections = getSections(data);

  return (
    <>
      <nav ref={ref} className={styles.container}>
        {router.asPath !== '/playbook' && <HomeButton />}
        <div className={styles.main}>
          <ul className={styles.inner} data-expanded={submenuExpanded}>
            {sections?.map((item, index) => {
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
