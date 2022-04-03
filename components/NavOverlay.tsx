import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';
import CloseButtonIcon from '../public/close-button.svg';
import ListArrowIcon from '../public/list-arrow.svg';
import Link from 'next/link';
import { Search } from './';
const { className, styles } = css.resolve`
  div {
    height: 100%;
    border: 12px solid var(--yellow);
    background-color: var(--black);
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1000;
    padding: 1.25rem 2.5rem;
    padding-bottom: 2.5rem;
    min-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column-gap: 0;
    }
  }
`;

const variants = {
  in: {
    x: '-12px',
  },
  out: {
    x: 'calc(-100% - 10rem)',
  },
};

const CloseNavButton = observer(() => {
  const store = useStore();
  const {
    uiStore: { closeNavOverlay },
  } = store;
  return (
    <>
      <div onClick={() => closeNavOverlay()}>
        <CloseButtonIcon />
      </div>
      <style jsx>{`
        div {
          position: absolute;
          top: 1.25rem;
          right: -5rem;
          cursor: pointer;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
          img {
          }
        }
      `}</style>
    </>
  );
});

const ListItemLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <>
      <Link href={href}>
        <a>
          <div className="nav-link-xl">
            <span className="arrow">
              <ListArrowIcon />
            </span>
            {label}
          </div>
        </a>
      </Link>
      <style jsx>{`
        div {
          color: var(--white);
          margin: 0.625rem 1.25rem;
        }
        .arrow {
          margin-right: 12px;
        }
        @media only screen and (max-width: 768px) {
          div {
          }
          img {
          }
        }
      `}</style>
    </>
  );
};

const ListItemButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <>
      <div className="nav-link-xl" onClick={onClick}>
        <span className="arrow">
          <ListArrowIcon />
        </span>
        {label}
      </div>
      <style jsx>{`
        div {
          color: var(--white);
          margin: 0.625rem 1.25rem;
          cursor: pointer;
        }
        .arrow {
          margin-right: 12px;
        }
        @media only screen and (max-width: 768px) {
          div {
          }
          img {
          }
        }
      `}</style>
    </>
  );
};

const NavOverlay = observer(() => {
  const store = useStore();
  const {
    uiStore: { navOverlayOpen, openPlaybookNavOverlay },
  } = store;
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'out'}
        animate={navOverlayOpen ? 'in' : 'out'}
        variants={variants}
        className={className}
      >
        <div>
          <h3 className="home">Home</h3>
          <div className="section">
            <h3>Playbook</h3>
            <ListItemButton
              label="Table of Contents"
              onClick={() => {
                openPlaybookNavOverlay();
              }}
            />
            <ListItemLink label="Featured Voices" href="/featured-voices" />
            <ListItemLink label="Credits" href="/" />
          </div>
          <div className="section">
            <h3>Resources</h3>
            <ListItemLink
              label="Library of Experts"
              href="/library-of-experts"
            />
          </div>
          <div className="section">
            <h3>About</h3>
            <ListItemLink label="Team" href="/team" />
            <ListItemLink label="Partners" href="/partners" />
            <ListItemLink label="Contact" href="/" />
          </div>
        </div>
        <Search expand />
        <img src="/fern-small.png" alt="Fern" />
        {styles}
        <style jsx>{`
          .home {
            opacity: 0.5;
            margin-bottom: 1.5rem;
          }
          h3 {
            margin: 0;
            color: var(--white);
          }
          img {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          .section {
            margin-bottom: 1.5rem;
          }

          @media only screen and (max-width: 768px) {
          }
        `}</style>
        <CloseNavButton />
      </motion.div>
    </>
  );
});

export default NavOverlay;
