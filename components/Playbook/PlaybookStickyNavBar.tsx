import HamburgerIcon from '../../public/hamburger-playbook.svg';
import SearchIcon from '../../public/search-playbook.svg';
import LogoLightIcon from '../../public/logo-light.svg';
import Link from 'next/link';
import Logo from '../Logo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

const NavButtons = observer(() => {
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const color = scrollPosition > 0.05 ? 'var(--black)' : 'var(--white)';
  return (
    <div>
      <button>
        <HamburgerIcon fill={color} />
        <div className="spacer" />
        <SearchIcon fill={color} />
      </button>
      <NavTitle />

      <style jsx>{`
        .spacer {
          width: 0.65rem;
        }
        div {
          display: flex;
          grid-column: span 1;
          height: ${PLAYBOOK_NAV_HEIGHT}px;
        }
        button {
          line-height: 28px;

          display: flex;
          align-items: center;
          border-right: 4px solid ${color};
          border-bottom: 4px solid ${color};
          background-color: transparent;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
});

const NavTitle = observer(() => {
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;

  const color = scrollPosition > 0.05 ? 'var(--black)' : 'var(--white)';
  return (
    <div className="nav-link-xl-bold">
      Playbook Contents
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.25rem;
          height: ${PLAYBOOK_NAV_HEIGHT}px;
          text-align: center;
          line-height: 24px;
          border-right: 4px solid ${color};
          border-bottom: 4px solid ${color};
          color: ${color};
          text-transform: uppercase;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
});

const NavLogo = observer(() => {
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;

  const light = {
    backgroundColor: 'var(--white)',
    textColor: 'var(--black)',
  };
  const dark = {
    backgroundColor: 'var(--black)',
    textColor: 'var(--white)',
  };

  return (
    <div>
      <Link href="/">
        <a>
          <Logo {...(scrollPosition > 0.05 ? dark : light)} />
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
});

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
