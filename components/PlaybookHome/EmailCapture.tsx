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
import EmailCaptureSubmitButton from './EmailCaptureSubmitButton';
import * as ga from '../../lib/ga';
function getStyles(color) {
  return css.resolve`
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      grid-column: span 4;
      background-color: var(--${color});
      position: relative;
      padding: 5rem 2.5rem;
      border-top: 4px solid var(--blueFour);
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 2.5rem 1.25rem;
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

interface EmailCaptureData {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

export const EMAIL_CAPTURE_INPUT_HEIGHT = 72;

const EmailCapture = ({
  data,
  index,
}: {
  data: EmailCaptureData;
  index: number;
}) => {
  const controls = useAnimation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const [submitted, setSubmiited] = useState(false);
  const { title, subtitle, backgroundColor: color } = data;
  const backgroundColor = color ?? 'black';
  const { className, styles } = getStyles(backgroundColor);
  const inverseColor = backgroundColor === 'black' ? 'white' : 'black';

  const onSubmit = async () => {
    try {
      if (!email) {
        throw "Can't be left blank";
      }
      const response = await fetch('/api/addEmail', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (response.status === 401) {
        throw 'Email already subscribed';
      } else if (response.status === 400) {
        throw "Couldn't subscribe";
      }

      ga.event({
        action: 'mailing_list_subscription_success',
        params: {
          origin: 'email_capture_block',
        },
      });
      setEmailError(null);
      setSubmiited(true);
    } catch (err) {
      controls.start({
        x: [0, -8, 8, -5, 5, 0],
        transition: {
          delay: FRAMER_TRANSITION_FASTEASE.duration,
          duration: 0.5,
        },
      });
      setEmailError(err);
    }
  };

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        {title && <h2 className="title">{title}</h2>}
        {subtitle && <div className="subtitle tease-lede">{subtitle}</div>}
        <div className="input-row">
          <input
            placeholder="NAME@EXAMPLE.COM"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <EmailCaptureSubmitButton onClick={onSubmit} submitted={submitted} />
        </div>
        <EmailCaptureErrorMessage
          errorMessage={emailError}
          errorControls={controls}
        />
      </div>
      <img src="/fern-small.png" alt="Fern" />

      <style jsx>{`
        .title {
          text-align: left;
          color: var(--${inverseColor});
          text-transform: uppercase;
          font-variation-settings: 'wght' 700, 'wdth' 40;
          margin-bottom: 0.625rem;
        }

        h2 {
          margin: 0;
        }
        .subtitle {
          text-align: left;
          color: var(--${inverseColor});
          margin-bottom: 1.25rem;
        }
        .layout {
          max-width: 80%;
        }
        .article-link {
        }
        .input-row {
          height: ${EMAIL_CAPTURE_INPUT_HEIGHT}px;
          position: relative;
          display: inline-block;
        }

        img {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
        input[type='text'] {
          height: ${EMAIL_CAPTURE_INPUT_HEIGHT}px;
          border: 0;
          border-radius: 0;
          padding: 1.25rem;
          text-transform: uppercase;
          color: var(--blueThree);
          font-size: 18px;
          line-height: 22px;
          font-family: var(--flexa-mono);
          font-weight: 500;
          min-width: 400px;
          background-color: var(
            --${backgroundColor === 'white' ? 'greyBlue' : 'white'}
          );
        }
        @media only screen and (max-width: 768px) {
          .layout {
            max-width: 100%;
          }
          img {
            display: none;
          }
          .input-row {
            width: 100%;
          }
          input[type='text'] {
            min-width: 0;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default EmailCapture;
