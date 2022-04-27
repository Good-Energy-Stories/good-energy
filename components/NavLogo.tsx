import HamburgerIcon from '../public/hamburger-playbook.svg';
import SearchIcon from '../public/search-playbook.svg';
import LogoLightIcon from '../public/logo-light.svg';
import Link from 'next/link';
import Logo from './Logo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { dark, NavBarStyle, PLAYBOOK_NAV_HEIGHT } from './StickyNavBar';

const NavLogo = ({
  theme = dark,
  height,
}: {
  theme?: NavBarStyle;
  height: number;
}) => {
  return (
    <div>
      <Link href="/">
        <a style={{ height }}>
          <Logo
            height={height}
            textColor={theme.logoTextColor}
            backgroundColor={theme.logoBackgroundColor}
          />
        </a>
      </Link>

      <style jsx>{`
        div {
          pointer-events: auto;
          display: flex;
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

export default NavLogo;
