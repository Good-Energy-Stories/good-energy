import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Logo from '../Logo';
import Link from 'next/link';
import { BANNER_HEIGHT, BANNER_HEIGHT_MOBILE } from '../PageBanner';
import { NavBarStyles, NavBarStyle, dark, light } from '../StickyNavBar';

const NavLinks = ({ theme }: { theme?: NavBarStyle }) => {
  return (
    <div className="nav-link-xl-bold">
      <Link href="/playbook">
        <a>Playbook</a>
      </Link>

      <Link href="/about/library-of-experts">
        <a>Resources</a>
      </Link>

      <a>About</a>

      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        a {
          margin: 0 1.25rem;
          text-transform: uppercase;
          color: ${theme.textColor};
        }
        button {
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
        <HamburgerIcon fill={theme.textColor} />
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
      <div className="">
        <span>
          <SearchIcon fill={theme.textColor} />
        </span>
        <input type="text" className="nav-link-xl" placeholder="Search" />
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
          border-left: 5px solid ${theme.textColor};
          max-width: 200px;
          display: flex;
          align-items: center;
          grid-column: span 1;
        }
        input[type='text'] {
          padding: 0.625rem;
          text-transform: uppercase;
          color: ${theme.textColor};
          border: 0;
          background-color: transparent;
        }
        ::placeholder {
          color: ${theme.textColor};
        }

        :-ms-input-placeholder {
          color: ${theme.textColor};
        }

        ::-ms-input-placeholder {
          color: ${theme.textColor};
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
          <Logo
            textColor={theme.logoTextColor}
            backgroundColor={theme.logoBackgroundColor}
          />
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
            border-top: 5px solid ${theme.textColor};
            border-bottom: 5px solid ${theme.textColor};
            display: flex;
            background-color: ${theme.backgroundColor};
            justify-content: space-between;
            position: sticky;
            top: 0;
            margin-top: ${showBanner ? BANNER_HEIGHT : 0}px;
            font-size: 20px;

            z-index: 100;
          }

          @media only screen and (max-width: 768px) {
            div {
              margin-top: ${showBanner ? BANNER_HEIGHT_MOBILE : 0}px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default StickyNavBar;
