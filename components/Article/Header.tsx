import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Breadcrumbs } from '..';

const { className, styles } = css.resolve`
  div {
    grid-column: 1/4;
    margin-left: 0rem;
    padding: 0 2.5rem;
    padding-bottom: 2rem;
    background-color: var(--blueFive);
    margin-top: -30vh;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Title = ({ title, byline }: { title: string; byline: string }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="breadcrumbs">
        <Breadcrumbs
          path={[
            { label: 'playbook', href: '/' },
            { label: 'playbook', href: '/' },
            { label: 'playbook', href: '/' },
          ]}
        />
      </div>
      <h1>{title}</h1>
      <div className="subhead">{byline}</div>

      <style jsx>{`
        .breadcrumbs {
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        .open-quote {
        }
        h1 {
          margin-top: 0;
          margin-bottom: 2.5rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Title;
