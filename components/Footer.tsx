import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Banner, Title, Lede, Tags } from './ArticleLink';
import Link from 'next/link';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    margin-top: 1.25rem;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: var(--grid-col);
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

interface FooterLink {
  label: string;
  link: string;
}

const FooterLinks = ({ links }: { links: FooterLink[] }) => {
  return (
    <>
      {links.map((l) => (
        <Link key={l.label} href={l.link} passHref>
          <div>
            {l.label}
            <style jsx>{`
              div {
                margin-bottom: 0.625rem;
                font-size: 20px;
              }
            `}</style>
          </div>
        </Link>
      ))}
    </>
  );
};

const SearchBar = () => {
  return (
    <>
      <div className="search-bar"></div>
      <style jsx>{`
        .search-bar {
          grid-column-start: 1;
          grid-column-end: 3;

          border: 2px solid var(--white);
          margin-top: 1.25rem;
        }
      `}</style>
    </>
  );
};

const Footer = () => {
  const playbook = [
    { label: 'Introduction', link: '' },
    { label: 'The Why', link: '' },
    { label: 'Climate Storytelling', link: '' },
    { label: 'Solutions on Screen', link: '' },
    { label: 'Characters', link: '' },
    { label: 'Story World', link: '' },
    { label: 'Climate Storytelling', link: '' },
    { label: 'Credits', link: '' },
  ];

  const resources = [
    { label: 'Library of Experts', link: '' },
    { label: 'Partner Organizations', link: '' },
    { label: 'Additional Resources', link: '' },
  ];

  const team = [
    { label: 'Team', link: '' },
    { label: 'Partners', link: '' },
    { label: 'Contact', link: '' },
  ];
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="links">
        <div className="col">
          <h4>Playbook</h4>
          <FooterLinks links={playbook} />
        </div>
        <div className="col">
          <h4>Resources</h4>
          <FooterLinks links={resources} />
        </div>
        <div className="col">
          <h4>About</h4>
          <FooterLinks links={team} />
        </div>
      </div>
      <SearchBar />

      <style jsx>{`
        .article-link {
        }

        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
        .links {
          display: flex;
        }
        .col {
          margin-right: 2.5rem;
        }
        h4 {
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Footer;
