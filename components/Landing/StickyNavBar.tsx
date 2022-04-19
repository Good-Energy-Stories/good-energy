import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Logo from '../Logo';
import Link from 'next/link';
import { BANNER_HEIGHT, BANNER_HEIGHT_MOBILE } from '../PageBanner';
import {
  NavBarStyles,
  NavBarStyle,
  dark,
  light,
  MOBILE_PLAYBOOK_NAV_HEIGHT,
  PLAYBOOK_NAV_HEIGHT,
} from '../StickyNavBar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchButton from './SearchButton';
import CTAButton from '../CTAButton';
import { BorderCTAButton, MediumBorderCTAButton } from '..';
import SmallBorderCTAButton from '../SmallBorderCTAButton';
import * as ga from '../../lib/ga';
import { motion } from 'framer-motion';
const NavLinks = ({
  theme,
  donateLink,
}: {
  theme?: NavBarStyle;
  donateLink?: string;
}) => {
  return (
    <div className="nav-link-xl-bold">
      <Link href="/playbook">
        <a>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ opacity: 0.8 }}>
            Playbook
          </motion.div>
        </a>
      </Link>

      <Link href="/about">
        <a>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ opacity: 0.8 }}>
            About
          </motion.div>
        </a>
      </Link>

      {donateLink && (
        <MediumBorderCTAButton
          href={donateLink}
          label={'Donate'}
          color={theme.textColor}
        />
      )}

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

const SearchBar = ({ theme }: { theme?: NavBarStyle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const handleClick = () => {
    ga.event({
      action: 'search_initiated',
      params: {
        origin: 'landing_page_nav_bar',
      },
    });
    router.push({
      pathname: '/playbook/search',
      query: { query: searchQuery },
    });
  };

  return (
    <>
      <div className="search-container">
        <motion.span
          animate={{
            transform:
              searchQuery.length !== 0
                ? 'matrix(1.20,-0.20,0.20,1.20,-2,2)'
                : 'matrix(1,0,0,1,0,2)',
          }}
        >
          <SearchIcon fill={theme.textColor} />
        </motion.span>
        <input
          type="text"
          className="nav-link-xl"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton
          active={searchQuery.length !== 0}
          onClick={() => handleClick()}
        />
      </div>
      <NavLogo theme={theme} />
      <style jsx>{`
        .search-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding-left: 1.25rem;
          border-left: 5px solid ${theme.textColor};
          display: flex;
          align-items: center;
          grid-column: span 1;
          margin-left: 8rem;
        }
        button {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          border: none;
          padding: 15px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 28px;

          cursor: pointer;
          background-color: var(--pink);
        }
        div {
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

        @media only screen and (max-width: 1080px) {
          .search-container {
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
        <a
          style={{
            height: PLAYBOOK_NAV_HEIGHT,
          }}
        >
          <Logo
            height={PLAYBOOK_NAV_HEIGHT}
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
          z-index: 100;
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
  donateLink,
}: {
  mode?: NavBarStyles;
  showBanner: boolean;
  donateLink?: string;
}) => {
  const theme = mode === NavBarStyles.dark ? dark : light;
  return (
    <>
      <div>
        <NavButtons theme={theme} donateLink={donateLink} />
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
