import HamburgerIcon from '../../public/hamburger.svg';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

import { NavBarStyle } from '../StickyNavBar';

import { motion } from 'framer-motion';
import NavLinks from './NavLinks';

const NavButtons = observer(
  ({ theme, donateLink }: { theme?: NavBarStyle; donateLink?: string }) => {
    const store = useStore();
    const {
      uiStore: { openNavOverlay },
    } = store;
    return (
      <div>
        <button onClick={() => openNavOverlay()}>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ opacity: 0.8 }}>
            <HamburgerIcon fill={theme.textColor} />
          </motion.div>
        </button>

        <NavLinks theme={theme} donateLink={donateLink} />
        <style jsx>{`
          div {
            display: flex;
            grid-column: span 3;
          }
          button {
            line-height: 28px;
            background-color: transparent;
            display: flex;
            align-items: center;
          }

          @media only screen and (max-width: 768px) {
            div {
            }
          }
        `}</style>
      </div>
    );
  },
);

export default NavButtons;
