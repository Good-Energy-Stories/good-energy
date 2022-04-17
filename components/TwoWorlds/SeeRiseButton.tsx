import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import Link from 'next/link';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
function getStyles() {
  return css.resolve`
    div {
      margin: 0 1.25rem;
      cursor: pointer;
      border: 4px solid var(--white);
      position: absolute;
      top: 0;
      right: 0;

      border: 4px solid var(--white);
      grid-column: 1/-1;
    }
    @media only screen and (max-width: 768px) {
      div {
        margin: 0;
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
      }
    }
  `;
}

const variants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

const SeeRiseButton = ({
  onClick,
  active,
}: {
  onClick: () => void;
  active: boolean;
}) => {
  const { className, styles } = getStyles();
  return (
    <motion.div
      variants={variants}
      animate={active ? 'active' : 'inactive'}
      transition={FRAMER_TRANSITION_EASEOUT}
      className={className}
      onClick={onClick}
    >
      <div className="button-text">See Rise</div>
      <style jsx>{`
        .button-text {
          text-align: center;
          padding: 5px 10px;
          padding-bottom: 4px;
          text-transform: uppercase;
        }
        .container {
        }
        .arrow {
          margin-left: 6px;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default SeeRiseButton;
