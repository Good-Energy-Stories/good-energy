import HamburgerIcon from '../public/hamburger-playbook.svg';
import SearchIcon from '../public/search-playbook.svg';
import LogoLightIcon from '../public/logo-light.svg';
import Link from 'next/link';
import Logo from './Logo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';

export const light: NavBarStyle = {
  backgroundColor: 'transparent',
  textColor: 'var(--white)',
  logoBackgroundColor: 'var(--white)',
  logoTextColor: 'var(--black)',
};
export const dark: NavBarStyle = {
  backgroundColor: 'var(--blueFive)',
  textColor: 'var(--black)',
  logoBackgroundColor: 'var(--black)',
  logoTextColor: 'var(--white)',
};
export interface NavBarStyle {
  backgroundColor: string;
  textColor: string;
  logoBackgroundColor: string;
  logoTextColor: string;
}
export enum NavBarStyles {
  light = 'light',
  dark = 'dark',
}

const Nav = ({
  label = null,
  theme,
}: {
  label?: string;
  theme?: NavBarStyle;
}) => {
  return (
    <div>
      <NavButtons border={label === null ? false : true} theme={theme} />
      {label && <NavTitle label={label} theme={theme} />}

      <style jsx>{`
        div {
          display: flex;
          grid-column: span 1;
          height: ${PLAYBOOK_NAV_HEIGHT}px;
          background-color: ${label ? theme.backgroundColor : 'transparent'};
        }

        @media only screen and (max-width: 768px) {
          div {
            background-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

const NavButtons = ({
  border = false,
  theme,
}: {
  border?: boolean;
  theme?: NavBarStyle;
}) => {
  const store = useStore();
  const {
    uiStore: { openNavOverlay },
  } = store;
  return (
    <div className={border ? 'border' : ''}>
      <button onClick={() => openNavOverlay()}>
        <HamburgerIcon fill={theme.textColor} />
      </button>
      <button>
        <Link href={'/playbook/search'}>
          <a>
            <motion.div
              whileHover={{ opacity: 0.6 }}
              whileTap={{ scale: 0.95 }}
            >
              <SearchIcon fill={theme.textColor} />
            </motion.div>
          </a>
        </Link>
      </button>

      <style jsx>{`
        .border {
          border-right: 4px solid ${theme.textColor};
          border-bottom: 4px solid ${theme.textColor};
        }
        div {
          padding: 0 1.25rem;
          pointer-events: auto;
          display: flex;
        }
        button {
          line-height: 28px;
          display: flex;
          align-items: center;
          background-color: transparent;
          padding: 0.3125rem;
        }
        @media only screen and (max-width: 768px) {
          .border {
            border: 0;
          }
        }
      `}</style>
    </div>
  );
};

const NavTitle = ({ label, theme }: { label: string; theme?: NavBarStyle }) => {
  return (
    <div className="nav-link-xl-bold">
      {label}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.25rem;
          height: ${PLAYBOOK_NAV_HEIGHT}px;
          text-align: center;
          line-height: 24px;
          border-right: 4px solid ${theme.textColor};
          border-bottom: 4px solid ${theme.textColor};
          color: ${theme.textColor};
          text-transform: uppercase;
          background-color: ${theme.backgroundColor};
          white-space: nowrap;
        }

        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const NavLogo = ({ theme }: { theme?: NavBarStyle }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <Logo
            textColor={theme.logoTextColor}
            backgroundColor={theme.logoBackgroundColor}
          />
        </a>
      </Link>

      <style jsx>{`
        div {
          pointer-events: auto;
          display: flex;
          width: 100%;
          justify-content: flex-end;
          grid-column-start: 4;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
};

export const PLAYBOOK_NAV_HEIGHT = 100;

const PlaybookStickyNavBar = ({
  label = null,
  mode = NavBarStyles.dark,
}: {
  label?: string;
  mode?: NavBarStyles;
}) => {
  const theme = mode === NavBarStyles.dark ? dark : light;
  return (
    <>
      <div>
        <Nav label={label} theme={theme} />
        <NavLogo theme={theme} />
        <style jsx>{`
          div {
            pointer-events: none;
            display: grid;
            grid-template-columns: var(--grid-col);
            justify-content: space-between;
            position: sticky;
            top: 0;
            font-size: 20px;
            height: ${PLAYBOOK_NAV_HEIGHT}px;
            width: 100%;
            z-index: 100;
          }

          @media only screen and (max-width: 768px) {
            div {
              padding-left: 0.625rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PlaybookStickyNavBar;
