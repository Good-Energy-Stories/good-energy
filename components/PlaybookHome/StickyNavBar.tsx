import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SecondaryNavMenu } from '../SecondaryNavMenu';
import NavDropdownButton from './NavDropdownButton';
import { motion } from 'framer-motion';
import * as ga from '../../lib/ga';
import {
  MOBILE_PLAYBOOK_NAV_HEIGHT,
  PLAYBOOK_NAV_HEIGHT,
} from '../StickyNavBar';
import MediumBorderCTAButton from '../MediumBorderCTAButton';
import SmallBorderCTAButton from '../SmallBorderCTAButton';
import CTAButton from '../CTAButton';
import { SEARCH_BUTTON_WIDTH } from '../Landing/SearchButton';

const NavLinks = () => {
  return (
    <div className="nav-link-xl-bold container">
      <div>
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </motion.div>
      </div>
      <div className="featured-voices-link">
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <Link href="/about/featured-voices">
            <a>Featured Voices</a>
          </Link>
        </motion.div>
      </div>
      <div className="partners-link">
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <Link href="/about/partners">
            <a>Partners</a>
          </Link>
        </motion.div>
      </div>
      <div>
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-transform: uppercase;
        }

        .nav-link-xl-bold {
          text-align: center;
        }
        .border {
          border-left: 4px solid var(--black);
          border-right: 4px solid var(--black);
        }
        button {
          line-height: 28px;
          background-color: var(--blueFive);
        }

        @media only screen and (max-width: 900px) {
          .featured-voices-link {
            display: none;
          }
        }
        @media only screen and (max-width: 1200px) {
          a {
            padding: 0 0.625rem;
            text-align: center;
          }
        }

        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
          button {
            line-height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

const MobileOpenTOCButton = observer(() => {
  const store = useStore();
  const {
    uiStore: { openPlaybookNavOverlay },
  } = store;
  return (
    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ opacity: 0.8 }}>
      <div className="container">
        <div
          className="container-inner"
          onClick={() => openPlaybookNavOverlay()}
        >
          <div className="button-text">Table of Contents</div>
        </div>
      </div>
      <style jsx>{`
        .button-text {
          white-space: nowrap;
          text-align: center;
          padding: 5px 10px;
          padding-bottom: 4px;
          text-transform: uppercase;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;
        }
        .container-inner {
          margin: 0 1.25rem;
          display: inline-block;
          position: relative;
          border: 4px solid;
        }
      `}</style>
    </motion.div>
  );
});

const NavButtons = observer(
  ({ setExpanded, expanded }: { setExpanded: any; expanded: boolean }) => {
    const store = useStore();
    const {
      uiStore: { openNavOverlay },
    } = store;
    return (
      <div>
        <button onClick={() => openNavOverlay()}>
          <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
            <HamburgerIcon fill="var(--black)" />
          </motion.div>
        </button>

        <MobileOpenTOCButton />
        <NavLinks />
        <style jsx>{`
          div {
            display: flex;
            grid-column: span 3;
          }
          button {
            line-height: 28px;
            background-color: var(--blueFive);
            display: flex;
            align-items: center;
            border-right: 4px solid var(--black);
          }
          @media only screen and (max-width: 1200px) {
            div {
              grid-column: 1/-1;
            }
          }

          @media only screen and (max-width: 1080px) {
            div {
              grid-column: 1/-1;
            }
            button {
              line-height: 20px;
            }
          }
        `}</style>
      </div>
    );
  },
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const handleClick = () => {
    ga.event({
      action: 'search_initiated',
      params: {
        origin: 'playbook_home_nav_bar',
      },
    });
    router.push({
      pathname: '/playbook/search',
      query: { query: searchQuery },
    });
  };
  return (
    <>
      <div>
        <motion.span
          style={{ width: 30 }}
          animate={{
            transform:
              searchQuery.length !== 0
                ? 'matrix(1.20,-0.20,0.20,1.20,-2,2)'
                : 'matrix(1,0,0,1,0,2)',
          }}
        >
          <SearchIcon fill="var(--black)" />
        </motion.span>
        <input
          className="nav-link-xl"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton
          active={searchQuery.length !== 0}
          color={'var(--blueFour)'}
          onClick={() => handleClick()}
        />
        <style jsx>{`
          span {
            width: 25px;
            margin-right: 5px;
            padding-top: 3px;
          }
          div {
            padding: 0.625rem;
            padding-left: 1.25rem;
            border-left: 5px solid var(--black);
            display: flex;
            align-items: center;
            grid-column: span 1;
            overflow: hidden;
            position: relative;
          }
          input[type='text'] {
            text-transform: uppercase;
            border: 0;
            background-color: transparent;
            width: 100%;
            padding-right: calc(0.625rem + ${SEARCH_BUTTON_WIDTH}px);
          }
          ::placeholder {
            color: var(--black);
          }

          :-ms-input-placeholder {
            color: var(--black);
          }

          ::-ms-input-placeholder {
            color: var(--black);
          }

          @media only screen and (max-width: 1200px) {
            div {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

const StickyNavBar = observer(
  ({ secondaryMenuInitial }: { secondaryMenuInitial: boolean }) => {
    const store = useStore();
    const {
      uiStore: { playbookSecondaryNavOpen, setPlaybookSecondaryNavOpen },
    } = store;

    useEffect(() => {
      setPlaybookSecondaryNavOpen(secondaryMenuInitial);
    }, [secondaryMenuInitial, setPlaybookSecondaryNavOpen]);
    return (
      <>
        <div>
          <NavButtons
            setExpanded={setPlaybookSecondaryNavOpen}
            expanded={playbookSecondaryNavOpen}
          />
          <SearchBar />
          <SecondaryNavMenu
            initial="closed"
            position={'absolute'}
            top={PLAYBOOK_NAV_HEIGHT - 4}
            color={'var(--black)'}
            backgroundColor={'var(--blueFive)'}
          />
          <style jsx>{`
            div {
              border-top: 5px solid var(--black);
              border-bottom: 5px solid var(--black);
              display: grid;
              grid-template-columns: var(--grid-col);
              justify-content: space-between;

              position: sticky;
              top: 0;
              font-size: 20px;
              min-height: ${PLAYBOOK_NAV_HEIGHT}px;
              z-index: 100;
              background-color: var(--blueFive);
            }

            @media only screen and (max-width: 768px) {
              div {
              }
            }
          `}</style>
        </div>
      </>
    );
  },
);

export default StickyNavBar;
