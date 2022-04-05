import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Breadcrumbs } from '..';
import { PortableTextSerializer } from '../';
import { PortableText } from '@portabletext/react';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    margin-left: 0rem;
    padding: 0 1.25rem;
    padding-bottom: 2rem;
    display: flex;
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

const Header = ({
  title,
  description,
}: {
  title: string;
  description: any;
}) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="left">
        <div className="breadcrumbs">
          <Breadcrumbs />
        </div>
        <h1>{title}</h1>
        <PortableText value={description} />
      </div>

      <style jsx>{`
        .left {
        }
        .right {
          width: 66%;

          padding-left: 5rem;
          padding-top: 4.25rem;
        }
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

export default Header;
