import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';

import { PortableText } from '@portabletext/react';
import PortableTextSerializer from './PortableTextSerializer';
import { Banner } from './Spotlight';
import Breadcrumbs from './Breadcrumbs';
import {
  Card,
  CharacterProfileCard,
  CharacterProfileCardStyle,
  CharacterProfileFeaturedSecondary,
} from './Cards';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 2.5rem;
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

const Spotlight = ({ data }) => {
  console.log('HERERE,', data);
  const { name, shortBio, bio, nextUp, portraitImage } = data;
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        className={className}
      >
        <div className="left">
          <Banner image={portraitImage} />
        </div>
        <div className="right">
          <div className="breadcrumbs">
            <Breadcrumbs />
          </div>
          <h1>{name}</h1>
          <div className="spotlight-intro-graf">{shortBio}</div>
          <div className="bio">
            <PortableText value={bio} components={PortableTextSerializer} />
          </div>
          {nextUp && (
            <Card
              content={nextUp}
              characterProfileCardStyle={
                CharacterProfileCardStyle.featuredSecondary
              }
            />
          )}
        </div>
        {styles}
        <style jsx>{`
          .label-medium {
            color: var(--white);
            padding-top: 4px;
          }
          h1 {
            margin-bottom: 1.25rem;
            margin-top: 2.5rem;
          }
          .spotlight-intro-graf {
            margin-bottom: 1.25rem;
          }
          .breadcrumbs {
            padding-right: 2.5rem;
          }
          .bio {
            margin-bottom: 2.5rem;
          }
          .left {
            grid-column: 1/2;
          }
          .right {
            grid-column: 2/3;
            padding: 0 2.5rem;
            padding-top: 2.5rem;
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default Spotlight;
