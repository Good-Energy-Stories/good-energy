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

const ExitPreviewButton = ({
  href,
  preview,
}: {
  href: any;
  preview: boolean;
}) => {
  if (!preview) return null;
  return (
    <>
      <div className="banner tease-lede">
        You are viewing a preview of a draft document. To see the live site,
        press the exit button to the right.
        <div className="container">
          {preview && (
            <Link href={href}>
              <div className="button-text">Exit preview mode</div>
            </Link>
          )}
        </div>
      </div>
      <style jsx>{`
        h4 {
          margin: 0;
        }
        .container {
          color: var(--black);
          padding: 5px 10px;
          background-color: var(--greyBlue);
          white-space: nowrap;
          border: 2px solid var(--pink);
          margin: 0 1.25rem;
          cursor: pointer;
        }
        .banner {
          background-color: var(--black);
          color: var(--white);
          position: fixed;
          bottom: 0;
          right: -12px;
          left: -12px;
          padding: 1.25rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default ExitPreviewButton;
