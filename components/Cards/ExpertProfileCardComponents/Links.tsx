import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import * as ga from '../../../lib/ga';
const { className, styles } = css.resolve`
  div {
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

const Link = ({ link }) => {
  const getLabelFromURL = (fullUrl = '') => {
    let newUrl = fullUrl
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '')
      .split('/');
    if (newUrl.length > 0) {
      return newUrl[0];
    }
    return '';
  };
  return (
    <div className="label-medium">
      <a
        href={link}
        onClick={() => ga.captureOutboundLink(link)}
        target="_blank"
        rel="noreferrer"
      >
        {getLabelFromURL(link)}
      </a>
      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
          margin-bottom: 0.625rem;
        }
      `}</style>
    </div>
  );
};

const Links = ({ links }: { links: any }) => {
  return (
    <div>
      {links.map((l) => (
        <Link key={l} link={l} />
      ))}
    </div>
  );
};

export default Links;
