import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Breadcrumbs } from '..';
import { PortableText } from '@portabletext/react';
import { PLAYBOOK_NAV_HEIGHT } from '../StickyNavBar';
import { ScrollDownPrompt } from '.';

function getStyles() {
  return css.resolve`
    div {
      grid-column: 1/5;
      height: calc(100vh - ${PLAYBOOK_NAV_HEIGHT}px);

      padding-bottom: 2rem;
      display: grid;
      grid-template-columns: var(--grid-col);
    }
    @media only screen and (max-width: 768px) {
      div {
        grid-column: 1/5;
        padding: 0 1.25rem;
        padding-top: 2.5rem;
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

const Header = ({
  title,
  smallTitle,
  description,
}: {
  title: string;
  smallTitle: string;
  description: any;
}) => {
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
      <div className="titles">
        <h3>{smallTitle}</h3>
        <h1>{title}</h1>
      </div>
      <div className="body-italic">
        <PortableText value={description} />
      </div>
      <ScrollDownPrompt />
      <style jsx>{`
        .titles {
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-column: 1/5;
        }
        h3 {
          grid-column: 1/5;
          text-align: center;
          margin: 0;

          margin-bottom: 2.5rem;
        }
        h1 {
          grid-column: 1/5;
          text-align: center;
          margin: 0;
        }
        .body-italic {
          grid-column: 2/4;
          text-align: left;
          margin: 1.25rem 0;
        }
        @media only screen and (max-width: 768px) {
          .body-italic {
            grid-column: 1/5;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Header;
