import { motion } from 'framer-motion';
import styles from './NavItems.module.css';
import NavItem from './NavItem';
import { useState } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
import classnames from 'classnames';

const NavItems = ({ data, depth }) => {
  const { contents } = data;
  return (
    <>
      {contents?.map((item, index) => (
        <NavItem key={index} data={item} depth={depth} />
      ))}
    </>
  );
};

export default NavItems;
