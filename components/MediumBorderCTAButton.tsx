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

const MediumBorderCTAButton = ({
  label,
  onClick,
  color = 'var(--black)',
}: {
  label: string;
  onClick: () => void;
  color?: string;
}) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="button-text">{label}</div>

      <style jsx>{`
        .button-text {
          text-align: center;
          padding: 5px 10px;
          padding-bottom: 4px;
          text-transform: uppercase;
          color: ${color};
        }
        .container {
          margin: 0 1.25rem;
          display: inline-block;
          position: relative;
          border: 4px solid ${color};
        }
        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
};

export default MediumBorderCTAButton;
