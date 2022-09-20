import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

import css from 'styled-jsx/css';
import { motion } from 'framer-motion';

import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import { NavLogo } from '..';
import SecondaryNavButtons from './SecondaryNavButtons';
import SecondaryMenuTab from './SecondaryMenuTab';

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

interface SecondaryNavMenu {
  includeNavItems?: boolean;
  top?: number;
  color?: string;
  backgroundColor?: string;
  position: string;
  initial?: string;
}

const SecondaryNavMenu = observer(
  ({
    includeNavItems = false,
    top = 0,
    color = 'var(--black)',
    backgroundColor = 'var(--blueFive)',
    position,
    initial,
  }: SecondaryNavMenu) => {
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

    console.log(playbookSections);
    return (
      <motion.div
        style={{ marginTop: -2 }}
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={initial}
        animate={playbookSecondaryNavOpen ? 'open' : 'closed'}
        variants={variants}
        className={className}
      >
        {includeNavItems && <SecondaryNavButtons />}
        {playbookSections.map((s) => {
          return (
            <SecondaryMenuTab
              key={s.label}
              label={s.label}
              firstArticle={s.firstArticle}
              articles={s.articles}
              color={color}
            />
          );
        })}
        {includeNavItems && <NavLogo height={SECONDARY_MENU_HEIGHT} />}
        {styles}
      </motion.div>
    );
  },
);

export default SecondaryNavMenu;
