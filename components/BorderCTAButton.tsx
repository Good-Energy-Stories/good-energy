import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { AnimatedUnderline } from './';
import Link from 'next/link';
function getStyles(color) {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--${color});

      min-width: 100%;
      position: relative;
      overflow: hidden;
      border-top: 4px solid var(--blueFour);
      grid-column: 1/-1;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const BorderCTAButton = ({
  label,
  href = '/',
  color = 'var(--black)',
}: {
  label: string;
  href: string;
  color?: string;
}) => {
  return (
    <>
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
        <div>
          <Link href={href}>
            <a className="button-text-large">
              <h4>{label}</h4>
            </a>
          </Link>
        </div>
      </motion.div>
      <style jsx>{`
        a {
          color: ${color} !important;
        }
        h4 {
          margin: 0;
          padding: 1.25rem 2.5rem;
        }

        div {
          display: inline-block;
          position: relative;
          border: 4px solid var(--black);
        }
        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </>
  );
};

export default BorderCTAButton;
