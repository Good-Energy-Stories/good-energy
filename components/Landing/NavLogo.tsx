import Logo from '../Menu/Header/Logo';
import Link from 'next/link';
import { NavBarStyle, PLAYBOOK_NAV_HEIGHT } from '../StickyNavBar';

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

export default NavLogo;
