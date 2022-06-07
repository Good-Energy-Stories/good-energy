import Link from 'next/link';
import { NavBarStyle } from '../StickyNavBar';
import { MediumBorderCTAButton } from '..';
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

export default NavLinks;
