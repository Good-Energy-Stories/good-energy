import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import QuoteDropdownIcon from '../../../public/quote-dropdown.svg';
import Link from 'next/link';
function getStyles(color) {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--${color});

      min-width: 100%;
      position: relative;
      overflow: hidden;
      border-top: 1px solid var(--blueFour);
      grid-column: 1/-1;
      cursor: pointer;
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
  active: {
    rotate: 0,
  },
  inactive: {
    rotate: 180,
  },
};

const SeeQuotesButton = ({
  color = 'var(--black)',
  onClick,
  active,
}: {
  color?: string;
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="label-small">
        See Quotes
        <motion.span
          style={{ height: 28 }}
          variants={variants}
          animate={active ? 'active' : 'inactive'}
        >
          <QuoteDropdownIcon />
        </motion.span>
      </div>

      <style jsx>{`
        a {
          color: ${color} !important;
        }
        .label-small {
          margin: 0;
          padding: 2px 4px;
          padding-left: 16px;
          color: var(--blueThree);
          display: flex;
          align-items: center;
        }
        .container {
          cursor: pointer;
          display: inline-block;
          position: relative;
          border: 2px solid var(--blueThree);
        }
        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
};

export default SeeQuotesButton;
