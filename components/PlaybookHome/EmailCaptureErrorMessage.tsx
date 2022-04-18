import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
} from '../../lib/framer/framer-animations';
function getStyles() {
  return css.resolve`
    div {
      height: 20px;
      margin-top: 0.625rem;
    }
    @media only screen and (max-width: 768px) {
      div {
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

const EmailCaptureErrorMessage = ({
  errorMessage,
  errorControls,
}: {
  errorMessage: string;
  errorControls: any;
}) => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'inactive'}
      animate={errorMessage ? 'active' : 'inactive'}
      variants={variants}
      className={className}
    >
      <motion.div animate={errorControls}>
        <div className="error-message label-medium">{errorMessage}</div>
      </motion.div>
      <style jsx>{`
        .error-message {
          color: var(--pink);
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default EmailCaptureErrorMessage;
