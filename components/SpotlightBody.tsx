import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';

import { PortableText } from '@portabletext/react';
import PortableTextSerializer from './PortableTextSerializer';
import { Banner } from './Spotlight';
import {
  ArticleCardStyle,
  Card,
  CharacterProfileCard,
  CharacterProfileCardStyle,
  CharacterProfileFeaturedSecondary,
} from './Cards';
import { PLAYBOOK_NAV_HEIGHT } from './StickyNavBar';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
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

const NextUp = ({ nextUp }) => {
  if (!nextUp) return null;
  return (
    <>
      <div className="divider" />

      <Card
        content={nextUp}
        articleCardStyle={ArticleCardStyle.nextUp}
        characterProfileCardStyle={CharacterProfileCardStyle.nextUp}
        last
        marginBottom={'1.25rem'}
      />
      <div className="divider" />
      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
          margin-top: 0.625rem;
        }
        .divider {
          border: 1px solid var(--blueThree);
        }
      `}</style>
    </>
  );
};

const Spotlight = ({
  name,
  shortBio,
  bio,
  nextUp,
  portraitImage,
  isInPlaylist,
}: {
  name: string;
  shortBio: any;
  bio: any;
  nextUp: any;
  portraitImage: any;
  isInPlaylist?: boolean;
}) => {
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        className={className}
      >
        {portraitImage && (
          <div className="left">
            <Banner image={portraitImage} isInPlaylist={isInPlaylist} />
          </div>
        )}
        <div className="right">
          <div className="breadcrumbs">
            <Breadcrumbs />
          </div>
          <h1>{name}</h1>
          <div className="spotlight-intro-graf">{shortBio}</div>
          <div className="bio">
            <PortableText value={bio} components={PortableTextSerializer} />
          </div>
          <NextUp nextUp={nextUp} />
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
          @media only screen and (max-width: 768px) {
            .breadcrumbs {
              padding-right: 0;
            }
            .left {
              grid-column: 1/-1;
              grid-row-start: 1;

              height: 500px;
              overflow: hidden;
              margin-bottom: 1.25rem;
              margin-top: -${isInPlaylist ? 0 : PLAYBOOK_NAV_HEIGHT}px;
            }
            .right {
              padding: 0 1.25rem;
              grid-row-start: 2;
            }
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default Spotlight;
