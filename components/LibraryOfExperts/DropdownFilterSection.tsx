import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { Dropdown, PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import ExpertTypeToggle from './ExpertTypeToggle';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
    height: 'auto',
  },
  out: {
    opacity: 0,
    height: 0,
  },
};

const DropdownFilterSection = ({
  label,
  placeholder,
  onChange,
  value,
  options,
}) => {
  return (
    <>
      <div className="container">
        <h4>{label}</h4>
        <div className="filter-row">
          <Dropdown
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            options={options}
          />
        </div>
      </div>
      <style jsx>{`
        .container {
        }

        h4 {
          text-transform: none;
          margin: 0;
          margin-bottom: 0.625rem;
        }
      `}</style>
    </>
  );
};

export default DropdownFilterSection;
