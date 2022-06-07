import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { imageUrlFor } from '../../utils/imageUrlFor';
import {
  MOBILE_PLAYBOOK_NAV_HEIGHT,
  PLAYBOOK_NAV_HEIGHT,
} from '../StickyNavBar';
import useBannerHeight from '../../utils/hooks/useBannerHeight';

const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    margin-left: 0rem;

    padding-bottom: 2rem;
    background-color: var(--blueFive);
    position: relative;
    margin-top: -${PLAYBOOK_NAV_HEIGHT + 6}px;

    overflow: hidden;
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

const Title = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: any;
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
      <img alt={image?.caption} src={imageUrlFor(image).url()} />
      <div className="card">
        <div className="h1-xl">{title}</div>
        <div className="h3-sentence">{subtitle}</div>
      </div>

      <style jsx>{`
        .breadcrumbs {
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        .card {
          position: absolute;
          bottom: 0;
          top: 0;
          padding: 0 2.5rem;
          padding-bottom: 5rem;
          padding-top: calc(106px + 1.25rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        img {
          min-width: 100%;
          min-height: 100%;
        }
        .h1-xl {
          color: var(--white);
          margin-top: 0;
          margin-bottom: 2.5rem;
        }
        .h3-sentence {
          max-width: 50vw;
          text-transform: none;
          color: var(--white);
        }
        @media only screen and (max-width: 768px) {
          .card {
            padding: 0 1.25rem;
          }
          .h3-sentence {
            max-width: 100%;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Title;
