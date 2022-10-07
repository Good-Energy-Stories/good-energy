import { motion, useAnimation, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import EmailCaptureErrorMessage from './EmailCaptureErrorMessage';
import { FRAMER_TRANSITION_FASTEASE } from '../../lib/framer/framer-animations';
import EmailCaptureSubmitButton from './EmailCaptureSubmitButton';
import * as ga from '../../lib/ga';

import styles from './EmailCapture.module.css';

export const EMAIL_CAPTURE_INPUT_HEIGHT = 72;

const EmailCapture = ({ data, index }: any) => {
  const controls = useAnimation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const [submitted, setSubmiited] = useState(false);
  const { title, subtitle, backgroundColor } = data;

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
    <div data-theme={backgroundColor} className={styles.container}>
      <div className={styles.inner}>
        {title && <h1>{title}</h1>}
        {subtitle && <div className="subtitle tease-lede">{subtitle}</div>}
        <div className={styles.inputRow}>
          <input
            className={styles.input}
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
      <img
        className={styles.image}
        src="/email-capture-bg.png"
        alt="Plants and a dragonfly"
      />

      <style jsx>{`
        .subtitle {
          text-align: left;
          margin-bottom: 1.25rem;
        }
        .layout {
          max-width: 80%;
        }
        .article-link {
        }

        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }

        @media only screen and (max-width: 768px) {
          .layout {
            max-width: 100%;
          }

          .input-row {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailCapture;
