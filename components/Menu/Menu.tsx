import Nav from './Nav/Nav';
import PlaybookNav from './PlaybookNav/PlaybookNav';
import styles from './Menu.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
import Header from './Header/Header';
import { useIsSmall } from '../../utils/useMediaQuery';

const MotionPlaybookNav = motion(PlaybookNav);

const desktopVariants = {
  playbookNav: {
    open: {
      x: 'calc(1 * (400px - var(--page-border-width)))',
    },
    closed: {
      x: 0,
    },
  },
  nav: {
    open: {
      x: 0,
    },
    closed: {
      x: 'calc(-1 * (400px + var(--page-border-width)))',
    },
  },
};

const mobileVariants = {
  playbookNav: {
    open: {
      x: '0%',
    },
    closed: {
      x: '-100%',
    },
  },
  nav: {
    open: {
      x: 0,
    },
    closed: {
      x: '-100%',
    },
  },
};

const Menu = observer(({ navigation }: any) => {
  const store = useStore();
  const {
    uiStore: { playbookNavOverlayOpen, navOverlayOpen },
  } = store;

  const isSmall = useIsSmall();
  return (
    <>
      <div className={styles.container}>
        <Header />

        <motion.div
          variants={isSmall ? mobileVariants.nav : desktopVariants.nav}
          initial={'closed'}
          animate={navOverlayOpen ? 'open' : 'closed'}
          transition={FRAMER_TRANSITION_FASTEASE}
          className={styles.inner}
        >
          <Nav data={navigation} />
          <MotionPlaybookNav
            style={{ zIndex: isSmall ? 0 : 1 }}
            variants={
              isSmall ? mobileVariants.playbookNav : desktopVariants.playbookNav
            }
            initial={'closed'}
            animate={playbookNavOverlayOpen ? 'open' : 'closed'}
            transition={FRAMER_TRANSITION_FASTEASE}
            data={navigation?.playbook}
          />
        </motion.div>
      </div>
    </>
  );
});
export default Menu;
