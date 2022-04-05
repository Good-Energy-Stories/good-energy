import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Logo from '../Logo';
import Link from 'next/link';
import { BANNER_HEIGHT } from '../PageBanner';

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

const NavLinks = ({ theme }: { theme?: NavBarStyle }) => {
  return (
    <div>
      <button>
        <Link href="/playbook">
          <a>Playbook</a>
        </Link>
      </button>
      <button>
        <a>Resources</a>
      </button>
      <button>
        <a>About</a>
      </button>

      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }

        button {
          color: ${theme.backgroundColor};
          line-height: 28px;
          background-color: transparent;
          margin: 0 1.25rem;
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

const NavButtons = observer(({ theme }: { theme?: NavBarStyle }) => {
  const store = useStore();
  const {
    uiStore: { openNavOverlay },
  } = store;
  return (
    <div>
      <button onClick={() => openNavOverlay()}>
        <HamburgerIcon fill={theme.backgroundColor} />
      </button>

      <NavLinks theme={theme} />
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
});

const SearchBar = ({ theme }: { theme?: NavBarStyle }) => {
  return (
    <>
      <div>
        <span>
          <SearchIcon fill={theme.backgroundColor} />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <NavLogo theme={theme} />
      <style jsx>{`
        span {
          width: 25px;
          margin-right: 5px;
          padding-top: 3px;
        }
        div {
          padding-left: 0.625rem;
          border-left: 5px solid ${theme.backgroundColor};
          max-width: 200px;
          display: flex;
          align-items: center;
          grid-column: span 1;
        }
        input[type='text'] {
          padding: 0.625rem;
          text-transform: uppercase;
          font-family: var(--flexa);
          font-size: 24px;
          font-style: normal;
          font-weight: 100;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          color: ${theme.backgroundColor};
          border: 0;
          background-color: transparent;
        }
        ::placeholder {
          color: ${theme.backgroundColor};
        }

        :-ms-input-placeholder {
          color: ${theme.backgroundColor};
        }

        ::-ms-input-placeholder {
          color: ${theme.backgroundColor};
        }

        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

const NavLogo = ({ theme }: { theme?: NavBarStyle }) => {
  return (
    <>
      <Link href="/">
        <a>
          <Logo {...theme} />
        </a>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          height: 100%;
        }
        a {
          max-height: 100px;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </>
  );
};

const StickyNavBar = ({
  mode = NavBarStyles.light,
  showBanner,
}: {
  mode?: NavBarStyles;
  showBanner: boolean;
}) => {
  const theme = mode === NavBarStyles.dark ? dark : light;
  return (
    <>
      <div>
        <NavButtons theme={theme} />
        <SearchBar theme={theme} />

        <style jsx>{`
          div {
            border-top: 5px solid ${theme.backgroundColor};
            border-bottom: 5px solid ${theme.backgroundColor};
            display: flex;

            justify-content: space-between;
            position: sticky;
            top: 0;
            margin-top: ${showBanner ? BANNER_HEIGHT : 0}px;
            font-size: 20px;

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

export default StickyNavBar;
