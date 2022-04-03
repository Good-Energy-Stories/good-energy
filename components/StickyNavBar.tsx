import HamburgerIcon from '../public/hamburger-playbook.svg';
import SearchIcon from '../public/search-playbook.svg';
import LogoLightIcon from '../public/logo-light.svg';
import Link from 'next/link';
import Logo from './Logo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

const light: NavBarStyle = {
  backgroundColor: 'var(--white)',
  textColor: 'var(--black)',
};
const dark: NavBarStyle = {
  backgroundColor: 'var(--black)',
  textColor: 'var(--white)',
};
export interface NavBarStyle {
  backgroundColor: string;
  textColor: string;
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
        }

        @media only screen and (max-width: 768px) {
          div {
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
        <HamburgerIcon fill={theme.backgroundColor} />
      </button>
      <button onClick={() => {}}>
        <SearchIcon fill={theme.backgroundColor} />
      </button>

      <style jsx>{`
        .border {
          border-right: 4px solid ${theme.backgroundColor};
          border-bottom: 4px solid ${theme.backgroundColor};
        }
        div {
          display: flex;
        }
        button {
          line-height: 28px;
          display: flex;
          align-items: center;
          background-color: transparent;
        }
        @media only screen and (max-width: 768px) {
          div {
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
          border-right: 4px solid ${theme.backgroundColor};
          border-bottom: 4px solid ${theme.backgroundColor};
          color: ${theme.backgroundColor};
          text-transform: uppercase;
        }

        @media only screen and (max-width: 768px) {
          div {
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
          <Logo {...theme} />
        </a>
      </Link>

      <style jsx>{`
        div {
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
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PlaybookStickyNavBar;
