import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { useState } from 'react';
import { CTAButton, BorderCTAButton } from '../';
import { PortableText } from '@portabletext/react';
import { Card, ArticleCardStyle, CharacterProfileCardStyle } from '../Cards';
import { ShadowOverlay } from './';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfileCard';

function getStyles() {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--white);
      min-width: 100%;
      position: relative;
      border-top: 4px solid var(--black);
      grid-column: 1/-1;
      display: grid;
      grid-template-columns: var(--grid-col);
      padding: 1.25rem 2.5rem;
      padding-bottom: 2.5rem;
      overflow: hidden;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
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

interface PlaylistData {
  title: string;
  byline: string;
  description: any;
  playlist: any;
}

const CardRow = ({
  playlist,
  shadowActive = false,
  onActionButtonClicked,
}: {
  playlist: any;
  shadowActive: boolean;
  onActionButtonClicked: (slug: string) => void;
}) => {
  if (!playlist) return null;
  return (
    <div className="row">
      <div className="row-inner">
        <ShadowOverlay active={shadowActive} />
        {playlist.map((c, i) => (
          <div key={i} className="card-wrapper">
            <Card
              index={i}
              content={c}
              onActionButtonClicked={onActionButtonClicked}
              articleCardStyle={ArticleCardStyle.readMore}
              expertProfileCardStyle={ExpertProfileCardStyle.readMore}
              characterProfileCardStyle={CharacterProfileCardStyle.readMore}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .row {
          grid-column: 1/-1;
          overflow: hidden;
        }
        .row-inner {
          display: flex;
          overflow-y: hidden;
          overflow-x: scroll;
        }
        .row-inner::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .row-inner {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .card-wrapper {
          margin: 0 1.25rem;
          min-width: 228px;
        }
        @media only screen and (max-width: 768px) {
        }
      `}</style>
    </div>
  );
};

export default CardRow;
