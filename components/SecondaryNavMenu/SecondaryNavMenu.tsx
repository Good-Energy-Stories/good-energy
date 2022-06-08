import HamburgerIcon from '../../public/small-hamburger.svg';

import SearchIcon from '../../public/small-search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { useState } from 'react';
import css from 'styled-jsx/css';
import { motion } from 'framer-motion';

import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import DropdownMenu from './DropdownMenu';
import { NavLogo } from '..';

function getStyles(
  includeNavItems: boolean,
  top: number,
  color: string,
  backgroundColor: string,
  position: string,
) {
  return css.resolve`
    div {
      position: ${position};
      z-index: 100;
      top: ${top}px;
      right: 0;
      left: 0;
      display: flex;
      width: 100%;
      background-color: ${backgroundColor};
      align-items: center;
      justify-content: ${includeNavItems ? 'space-between' : 'space-around'};
      border-bottom: 1px solid ${color};
      color: ${color};
      overflow: hidden;
    }
    @media only screen and (max-width: 1080px) {
      div {
        display: none !important;
      }
    }
  `;
}

const MenuTab = ({ label, firstArticle, articles, color }) => {
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
          <motion.div whileHover={{ opacity: 0.6 }}>
            <Link href={`/playbook/${firstArticle?.slug}`}>
              <a>
                <div className="playbook-toc-nav-link-small">{label}</div>
              </a>
            </Link>
          </motion.div>
        </div>
        {articles?.length > 1 && (
          <DropdownMenu
            expanded={expanded}
            offset={offset}
            articles={articles}
          />
        )}
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
            color: ${color};
            text-transform: uppercase;
            cursor: pointer;
          }
          @media only screen and (max-width: 1080px) {
            .tab {
              display: none;
            }
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

export const SECONDARY_MENU_HEIGHT = 40;

const variants = {
  open: {
    height: SECONDARY_MENU_HEIGHT,
    overflow: 'visible',
    transition: {
      height: FRAMER_TRANSITION_EASEOUT,
      overflow: { delay: FRAMER_TRANSITION_EASEOUT.duration },
    },
  },
  closed: { height: 0, overflow: 'hidden' },
};

const NavButtons = observer(() => {
  const store = useStore();
  const {
    uiStore: { openNavOverlay },
  } = store;
  return (
    <div>
      <button onClick={() => openNavOverlay()}>
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <HamburgerIcon fill={'#000'} />
        </motion.div>
      </button>
      <Link href={'/playbook/search'}>
        <a style={{ height: 30 }}>
          <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
            <SearchIcon fill={'#000'} />
          </motion.div>
        </a>
      </Link>
      <style jsx>{`
        button {
          padding: 0;
          margin-right: 0.625rem;
        }
        div {
          padding-left: 0.625rem;
          display: flex;
          align-items: center;
        }
        @media only screen and (max-width: 768px) {
          .right {
          }
        }
      `}</style>
    </div>
  );
});

const SecondaryNavMenu = observer(
  ({
    includeNavItems = false,
    top = 0,
    color = 'var(--black)',
    backgroundColor = 'var(--blueFive)',
    position,
    initial,
  }: {
    includeNavItems?: boolean;
    top?: number;
    color?: string;
    backgroundColor?: string;
    position: string;
    initial?: string;
  }) => {
    const { className, styles } = getStyles(
      includeNavItems,
      top,
      color,
      backgroundColor,
      position,
    );
    const store = useStore();
    const {
      uiStore: { playbookSecondaryNavOpen },
      dataStore: { playbookSections },
    } = store;
    return (
      <>
        <motion.div
          style={{ marginTop: -2 }}
          transition={FRAMER_TRANSITION_EASEOUT}
          initial={initial}
          animate={playbookSecondaryNavOpen ? 'open' : 'closed'}
          variants={variants}
          className={className}
        >
          {includeNavItems && <NavButtons />}
          {playbookSections.map((s) => {
            return (
              <MenuTab
                key={s.label}
                label={s.label}
                firstArticle={s.firstArticle}
                articles={s.articles}
                color={color}
              />
            );
          })}
          {includeNavItems && <NavLogo height={SECONDARY_MENU_HEIGHT} />}
        </motion.div>
        {styles}
      </>
    );
  },
);

export default SecondaryNavMenu;
