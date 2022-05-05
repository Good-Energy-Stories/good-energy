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

const Label = ({ children }) => {
  return (
    <div className="button-text-small">
      {children}
      <span className="arrow">→</span>
      <style jsx>{`
        .button-text-small {
          margin: 0;
          padding: 6px;
          cursor: pointer;
        }

        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
};

const LinkWrapper = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

const SmallBorderCTAButton = ({
  label,
  href = '/',
  color = 'var(--black)',
  onClick,
}: {
  label: string;
  href: string;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.98 }}>
        <div className="container">
          {onClick ? (
            <a onClick={onClick}>
              <Label>{label}</Label>
            </a>
          ) : (
            <LinkWrapper href={href}>
              <Label>{label}</Label>
            </LinkWrapper>
          )}
        </div>
      </motion.div>
      <style jsx>{`
        a {
          color: ${color} !important;
        }
        .button-text-small {
          margin: 0;
          padding: 6px;
        }
        .container {
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

export default SmallBorderCTAButton;
