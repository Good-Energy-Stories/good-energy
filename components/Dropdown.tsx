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

const customStyles = {
  container: (styles) => ({
    ...styles,
    color: 'var(--black)',
    borderRadius: '0',
    borderColor: 'var(--black)',
    backgroundColor: 'var(--blueFive)',
  }),
  control: (styles) => ({
    ...styles,
    border: '1px solid var(--black)',
    boxShadow: 'none',
    color: 'var(--black)',
    borderRadius: '0',
    backgroundColor: 'var(--blueFive)',
    '&:hover': {
      border: '1px solid var(--black)',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'var(--black)',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'var(--black)',
    fontFamily: 'var(--flexa-mono)',
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: '400',
  }),
  menu: (styles) => ({
    ...styles,
    color: 'var(--black)',
    borderRadius: '0',
    borderColor: 'var(--black)',
    backgroundColor: 'var(--blueFive)',
  }),
  menuList: (styles) => ({
    ...styles,
    color: 'var(--black)',
    borderRadius: '0',
    borderColor: 'var(--black)',
    backgroundColor: 'var(--blueFive)',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? 'var(--greyBlue)'
        : isSelected
        ? 'var(--pink)'
        : 'var(--blueFive)',
      color: 'var(--black)',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: 'var(--flexa-mono)',
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: '400',
      '&:hover': {
        backgroundColor: 'var(--pink)',
      },
    };
  },
};

const Dropdown = ({
  options,
  placeholder,
}: {
  options: any[];
  placeholder: string;
}) => {
  return (
    <div>
      {/*<Select
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        onChange={(value) => {
          console.log(value);
        }}
      />*/}
    </div>
  );
};

export default Dropdown;
