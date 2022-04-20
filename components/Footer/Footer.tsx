import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import Link from 'next/link';
import { FooterLink, Links, Copyright, ContactForm } from './';
import { Search } from '../';
import { light } from './ContactForm';
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
      padding: 1.25rem 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
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

const Right = ({
  includeContactForm = true,
}: {
  includeContactForm?: boolean;
}) => {
  return (
    <div>
      {includeContactForm && (
        <>
          <h4 className="title">Stay in Touch</h4>
          <ContactForm mode={light} inFooter />
        </>
      )}

      <Copyright />
      <style jsx>{`
        h4 {
          margin-bottom: 1.25rem;
        }
        div {
          grid-column-start: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        }
        @media only screen and (max-width: 768px) {
          div {
            grid-column-start: 1;
            grid-row-start: 2;
          }
        }
      `}</style>
    </div>
  );
};

const Footer = ({
  includeContactForm = true,
}: {
  includeContactForm?: boolean;
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
      <Left />
      <Right includeContactForm={includeContactForm} />
      {styles}
    </motion.div>
  );
};

export default Footer;
