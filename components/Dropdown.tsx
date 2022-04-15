import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { AnimatedUnderline } from './';
import Link from 'next/link';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

const arrowClosed = <span className="arrow-closed" />;
const arrowOpen = <span className="arrow-open" />;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const GoodEnergyDropdown = ({
  options,
  placeholder,
  onChange,
  value,
}: {
  options: any[];
  placeholder: string;
  onChange: (any) => void;
  value: any;
}) => {
  return (
    <div>
      <Dropdown
        className="good-energy-dropdown"
        controlClassName="good-energy-control"
        placeholderClassName="good-energy-placeholder"
        menuClassName="good-energy-menu"
        arrowClassName="good-energy-arrow"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <style global jsx>{`
        .good-energy-dropdown {
          background-color: var(--blueFive);
          width: 200px;
        }
        .good-energy-control {
          border-radius: 0;
          border: 1px solid var(--black);
          background-color: var(--blueFive);
        }
        .good-energy-placeholder {
          background-color: var(--blueFive);
        }
        .good-energy-menu {
          border: 1px solid var(--black);
          background-color: var(--blueFive);
        }
        .good-energy-arrow {
          border-color: var(--black) transparent transparent;
        }

        .is-open .Dropdown-arrow {
          border-color: transparent transparent var(--black) !important;
        }
        .Dropdown-option {
          color: var(--blueThree);
          font-family: var(--flexa);
        }
      `}</style>
    </div>
  );
};

export default GoodEnergyDropdown;
