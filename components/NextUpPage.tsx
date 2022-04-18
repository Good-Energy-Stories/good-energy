import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import Link from 'next/link';

function getStyles() {
  return css.resolve`
    div {
      grid-column: 1/5;
      display: grid;
      grid-template-columns: var(--grid-col);
      margin-left: 0rem;
      padding: 2.5rem;
      border-top: 1px solid var(--blueThree);
    }
    @media only screen and (max-width: 768px) {
      div {
        grid-column: 1/5;
        padding: 0 1.25rem;
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

const NextUp = ({ label, href }: { label: string; href: string }) => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="next-up-page">
        <Link href={href}>
          <a>
            <div className="label-medium">Next Up</div>
            <h2>{label}</h2>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
          margin-bottom: 1.25rem;
        }
        h2 {
          margin: 0;
        }
        .next-up-page {
          grid-column: 1/5;
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
        }
        @media only screen and (max-width: 768px) {
          .next-up-article {
            padding-top: 2.5rem;
            grid-column: 1/5;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default NextUp;
