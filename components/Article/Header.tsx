import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Breadcrumbs } from '..';

function getStyles(hasBannerImage) {
  return css.resolve`
    div {
      grid-column: 1/4;
      margin-left: 0rem;
      padding: 0 2.5rem;
      padding-bottom: 2rem;
      background-color: var(--blueFive);
      margin-top: ${hasBannerImage ? '-30vh' : '0'};
    }
    @media only screen and (max-width: 768px) {
      div {
        margin-top: 0;
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

const Title = ({
  title,
  byline,
  hasBannerImage,
  section,
}: {
  title: string;
  byline: string;
  hasBannerImage: boolean;
  section?: string;
}) => {
  const { className, styles } = getStyles(hasBannerImage);
  const path = section
    ? [{ label: 'Playbook', href: '/playbook' }, { label: section }]
    : null;
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
        <Breadcrumbs path={path} />
      </div>
      <h1>{title}</h1>
      <div className="subhead">{byline}</div>

      <style jsx>{`
        .breadcrumbs {
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        .subhead {
          margin-bottom: 1.25rem;
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
