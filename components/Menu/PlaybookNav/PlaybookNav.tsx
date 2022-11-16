import { forwardRef, useState } from 'react';
import { useIsSmall } from '../../../utils/useMediaQuery';
import NavSection from './NavSection';
import styles from './PlaybookNav.module.css';
import ShowAllButton from './ShowAllButton';
import classnames from 'classnames';
import CloseButton from './CloseButton';
import NavItem from './NavItem';

const PlaybookNav = forwardRef<HTMLElement, any>(({ data }, ref) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const isSmall = useIsSmall();
  return (
    <>
      <nav
        ref={ref}
        style={{ zIndex: isSmall ? 1 : -1 }}
        className={styles.container}
      >
        <CloseButton />
        <h3 className={styles.title}>Playbook Contents</h3>
        <ShowAllButton onClick={toggleShowAll} showAll={showAll} />
        <ul className={styles.inner}>
          {data?.map((item, index) => (
            <NavItem key={index} data={item} showAll={showAll} />
          ))}
        </ul>
      </nav>
    </>
  );
});

PlaybookNav.displayName = 'PlaybookNav';

export default PlaybookNav;
