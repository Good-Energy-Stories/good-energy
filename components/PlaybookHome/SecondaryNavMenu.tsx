import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useState } from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import { motion } from 'framer-motion';
import { PLAYBOOK_NAV_HEIGHT } from '../StickyNavBar';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import DropdownMenu from './DropdownMenu';

function getStyles() {
  return css.resolve`
    div {
      position: absolute;
      z-index: -1;
      top: ${PLAYBOOK_NAV_HEIGHT - 4}px;
      right: 0;
      left: 0;
      display: flex;
      width: 100%;
      background-color: var(--blueFive);
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid var(--black);
      overflow: hidden;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0;
      }
    }
  `;
}

const MenuTab = ({ label, articles }) => {
  const [expanded, setExpanded] = useState(false);
  const [offset, setOffset] = useState(0);

  return (
    <>
      <div
        className="tab"
        onMouseEnter={(e) => {
          setOffset(e.clientX);
          setExpanded(true);
        }}
        onMouseLeave={(e) => {
          setExpanded(false);
        }}
      >
        <div className="tab-inner">
          <div className="playbook-toc-nav-link-small">{label}</div>
        </div>
        <DropdownMenu expanded={expanded} offset={offset} articles={articles} />
        <style jsx>{`
          .tab {
            position: relative;
          }
          .tab-inner {
            height: ${SECONDARY_MENU_HEIGHT}px;
            display: flex;
            align-items: center;
            text-align: center;
          }
          .playbook-toc-nav-link-small {
            color: var(--black);
            text-transform: uppercase;
            cursor: pointer;
          }
          @media only screen and (max-width: 768px) {
            .right {
            }
          }
        `}</style>
      </div>
    </>
  );
};

export const SECONDARY_MENU_HEIGHT = 50;

const variants = {
  open: {
    height: SECONDARY_MENU_HEIGHT,
    overflow: 'visible',
    transition: { overflow: { delay: FRAMER_TRANSITION_EASEOUT.duration } },
  },
  closed: { height: 0, overflow: 'hidden' },
};

const SecondaryNavMenu = observer(({ expanded }: { expanded: boolean }) => {
  const { className, styles } = getStyles();
  const store = useStore();
  const {
    dataStore: { playbookSections },
  } = store;
  return (
    <>
      <motion.div
        style={{ overflow: expanded ? 'visible' : 'hidden', marginTop: -2 }}
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'closed'}
        animate={expanded ? 'open' : 'closed'}
        variants={variants}
        className={className}
      >
        {playbookSections.map((s) => {
          return (
            <MenuTab key={s.label} label={s.label} articles={s.articles} />
          );
        })}
      </motion.div>
      {styles}
    </>
  );
});

export default SecondaryNavMenu;