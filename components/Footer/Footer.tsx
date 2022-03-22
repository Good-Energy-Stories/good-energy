import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Banner, Title, Lede, Tags } from '../ArticleLink';
import Link from 'next/link';
import { Search, FooterLink, Links } from './';
import ContactForm from './ContactForm';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    background-color: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 1.25rem 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column-gap: 0;
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

const Left = () => {
  return (
    <div>
      <Links />
      <Search />
      <style jsx>{`
        div {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      `}</style>
    </div>
  );
};

const Right = () => {
  return (
    <div>
      <ContactForm />

      <style jsx>{`
        div {
          grid-column-start: 3;
        }
      `}</style>
    </div>
  );
};

const Footer = () => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Left />
      <Right />
      {styles}
    </motion.div>
  );
};

export default Footer;
