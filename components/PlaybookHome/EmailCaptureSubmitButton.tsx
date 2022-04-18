import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import EmailCaptureErrorMessage from './EmailCaptureErrorMessage';
import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
import EmailCaptureSubmitButtonInner from './EmailCaptureSubmitButtonInner';
function getStyles() {
  return css.resolve`
    div {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;
      background-color: var(--pink);
      overflow: hidden;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 2.5rem 1.25rem;
      }
    }
  `;
}

const variants = {
  submitted: {
    width: '100%',
    backgroundColor: 'var(--yellow)',
  },
  unsubmitted: {
    width: '20%',
    backgroundColor: 'var(--pink)',
  },
};

const EmailCaptureSubmitButton = ({
  onClick,
  submitted,
}: {
  onClick: any;
  submitted: boolean;
}) => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={FRAMER_TRANSITION_FASTEASE}
      initial={'unsubmitted'}
      animate={submitted ? 'submitted' : 'unsubmitted'}
      variants={variants}
      className={className}
      onClick={onClick}
    >
      <EmailCaptureSubmitButtonInner submitted={submitted} />

      <style jsx>{`
        button {
          height: 100%;
          width: 100%;
          border: none;
          padding: 15px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 28px;
        }

        @media only screen and (max-width: 768px) {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default EmailCaptureSubmitButton;
