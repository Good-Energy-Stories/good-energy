import HamburgerIcon from '../../public/hamburger.svg';
import ArrowIcon from '../../public/arrow.svg';

import SearchIcon from '../../public/search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { SearchButton } from '../Landing';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SecondaryNavMenu } from './';
import { motion } from 'framer-motion';

import css from 'styled-jsx/css';

function getStyles() {
  return css.resolve`
    span {
      margin-left: 10px;
      padding-bottom: 4px;
    }
    @media only screen and (max-width: 768px) {
    }
  `;
}

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const NavDropdownButton = ({ onClick, expanded }) => {
  const { className, styles } = getStyles();

  return (
    <div className="border">
      <div className="nav-link-xl-bold" onClick={onClick}>
        Contents
        <motion.span
          className={className}
          variants={variants}
          animate={expanded ? 'open' : 'closed'}
        >
          <ArrowIcon />
        </motion.span>
      </div>
      {styles}
      <style jsx>{`
        .nav-link-xl-bold {
          text-transform: uppercase;
          padding: 0 1.25rem;
          height: 100%;
        }
        div {
          display: flex;
          align-items: center;
        }
        span {
        }
        .border {
          border-right: 4px solid var(--black);
          cursor: pointer;
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

export default NavDropdownButton;
