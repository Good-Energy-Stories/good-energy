import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Name, Bio, Portrait } from './CharacterProfileCardComponents';
import Link from 'next/link';
import { CharacterProfileData } from './CharacterProfileCard';
import { PortraitSizes } from './CharacterProfileCardComponents';
import { Tags, FeaturedTag } from '.';
import CTAButton from '../CTAButton';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';

function getStyles() {
  return css.resolve`
    div {
      display: block;
      margin: 0 1.25rem;
      grid-column: 2/4;
    }
    @media only screen and (max-width: 768px) {
      div {
        width: 100%;
        margin: 0;
        padding: 0px;
        grid-column: 1/5;
      }
    }
  `;
}

const AuthorBioSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="author-bio">{children}</p>,
  },
  marks: {
    strong: ({ children }) => (
      <span className="author-bio-bold">{children}</span>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="author-bio-link "
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
  },
};

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const AuthorCard = ({
  content,
  index,
  wide = false,
}: {
  content: any;
  index: number;
  wide?: boolean;
}) => {
  const { className, styles } = getStyles();

  const { name, authorBio, slug, portraitImage, hasSpotlightPage } = content;

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        <div className="left">
          {portraitImage && (
            <Portrait image={portraitImage} size={PortraitSizes.extraSmall} />
          )}
        </div>
        <div className="right">
          {authorBio ? (
            <PortableText value={authorBio} components={AuthorBioSerializer} />
          ) : (
            <h2>{name}</h2>
          )}
          {hasSpotlightPage && (
            <div>
              <CTAButton
                label="Read More"
                href={`/playbook/characters/character-profiles/${slug}`}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        h2 {
          margin: 0.625rem 0;
        }
        .tease-lede {
          margin-bottom: 1.25rem;
        }

        .layout {
          margin-top: 1.25rem;

          display: grid;

          column-gap: 1.25rem;
        }
        .left {
          grid-column: 1/2;
          margin-top: 1.25rem;
        }
        .right {
          grid-column: 2/3;
          padding-top: 0.625rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media only screen and (max-width: 768px) {
          .left {
            margin-right: 0;
            display: flex;
            justify-content: center;
            margin-bottom: 1.25rem;
          }
          .layout {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default AuthorCard;
