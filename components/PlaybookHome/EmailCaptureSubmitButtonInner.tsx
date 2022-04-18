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
import { EMAIL_CAPTURE_INPUT_HEIGHT } from './EmailCapture';
function getStyles() {
  return css.resolve`
    div {
      display: flex;
      flex-direction: column;
      height: ${72 * 2}px;
    }
    @media only screen and (max-width: 768px) {
      div {
      }
    }
  `;
}

const variants = {
  submitted: {
    y: -72,
  },
  unsubmitted: {
    y: 0,
  },
};

const EmailCaptureSubmitButtonInner = ({
  submitted,
}: {
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
    >
      <div className="label arrow">→</div>
      <div className="label label-medium">{"You're Subscribed!"}</div>

      <style jsx>{`
        .arrow {
          font-size: 32px;
        }
        .label {
          display: flex;
          justify-content: center;
          font-family: var(--flexa-mono);
          font-weight: 500;
          color: var(--black);
          line-height: ${EMAIL_CAPTURE_INPUT_HEIGHT}px;
        }
        @media only screen and (max-width: 768px) {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default EmailCaptureSubmitButtonInner;
