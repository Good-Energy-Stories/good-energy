import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SecondaryNavMenu } from './';
import NavDropdownButton from './NavDropdownButton';
import { motion } from 'framer-motion';
import * as ga from '../../lib/ga';

const NavLinks = () => {
  return (
    <div className="nav-link-xl-bold">
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </motion.div>
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
        <Link href="/about/featured-voices">
          <a>Featured Voices</a>
        </Link>
      </motion.div>
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
        <Link href="/about/partners">
          <a>Partners</a>
        </Link>
      </motion.div>

      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </motion.div>

      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-transform: uppercase;
        }
        .border {
          border-left: 4px solid var(--black);
          border-right: 4px solid var(--black);
        }
        button {
          line-height: 28px;
          background-color: var(--blueFive);
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
        <NavDropdownButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        />
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

          @media only screen and (max-width: 1080px) {
            div {
              grid-column: span 4;
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
          }
          input[type='text'] {
            text-transform: uppercase;
            border: 0;
            background-color: transparent;
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

          @media only screen and (max-width: 1080px) {
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
          <SecondaryNavMenu />
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
              min-height: 100px;
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
