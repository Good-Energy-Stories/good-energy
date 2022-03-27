import HamburgerIcon from '../../public/hamburger-playbook.svg';
import SearchIcon from '../../public/search-playbook.svg';
import LogoLightIcon from '../../public/logo-light.svg';
import Link from 'next/link';
const NavButtons = () => {
  return (
    <div>
      <button>
        <HamburgerIcon fill={'var(--white)'} />
        <div className="spacer" />
        <SearchIcon fill={'var(--white)'} />
      </button>
      <NavTitle />

      <style jsx>{`
        .spacer {
          width: 0.65rem;
        }
        div {
          display: flex;
          grid-column: span 3;
        }
        button {
          line-height: 28px;

          display: flex;
          align-items: center;
          border-right: 4px solid var(--white);
          border-bottom: 4px solid var(--white);
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

const NavTitle = () => {
  return (
    <div className="nav-link-xl-bold">
      Playbook Contents
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.25rem;

          border-right: 4px solid var(--white);
          border-bottom: 4px solid var(--white);
          color: var(--white);
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

const NavLogo = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <LogoLightIcon />
        </a>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: flex-end;
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

const PlaybookStickyNavBar = (props) => {
  return (
    <>
      <div>
        <NavButtons />
        <NavLogo />
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
