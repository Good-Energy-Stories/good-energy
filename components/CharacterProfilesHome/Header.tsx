import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableTextSerializer } from '../';
import { PortableText } from '@portabletext/react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    margin-left: 0rem;
    padding: 0 7.5rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
  }
  @media only screen and (max-width: 1080px) {
    div {
      padding: 0 2.5rem;
      flex-direction: column;
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
      </div>
      <div className="right">
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
      <style jsx>{`
        .left {
          margin-right: 2.5rem;
        }
        .right {
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
        @media only screen and (max-width: 1080px) {
          .right {
            padding-top: 0;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Header;
