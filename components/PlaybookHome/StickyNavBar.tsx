import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
const NavDropdownButton = () => {
  return (
    <div className="border">
      <button>
        Contents
        <span>
          <ArrowIcon />
        </span>
      </button>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        span {
          margin-left: 10px;
          padding-bottom: 4px;
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

const NavLinks = () => {
  return (
    <div className="nav-link-xl-bold">
      <a>Home</a>

      <a>Featured Voices</a>

      <a>About</a>

      <Link href="/about/partners">
        <a>Partners</a>
      </Link>

      <a>Credits</a>

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

const NavButtons = observer(() => {
  const store = useStore();
  const {
    uiStore: { openNavOverlay },
  } = store;
  return (
    <div>
      <button onClick={() => openNavOverlay()}>
        <HamburgerIcon fill="var(--black)" />
      </button>

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

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
});

const SearchBar = () => {
  return (
    <>
      <div>
        <span>
          <SearchIcon fill="var(--black)" />
        </span>
        <input className="nav-link-xl" type="text" placeholder="Search" />
        <style jsx>{`
          span {
            width: 25px;
            margin-right: 5px;
            padding-top: 3px;
          }
          div {
            padding: 0.625rem;
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

          @media only screen and (max-width: 768px) {
            div {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

const StickyNavBar = (props) => {
  return (
    <>
      <div>
        <NavButtons />
        <SearchBar />

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
};

export default StickyNavBar;
