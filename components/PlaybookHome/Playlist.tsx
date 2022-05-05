import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { useState } from 'react';
import { CTAButton, BorderCTAButton } from '../';
import { PortableText } from '@portabletext/react';
import { Card, ArticleCardStyle, CharacterProfileCardStyle } from '../Cards';
import { CardRow, ShadowOverlay } from '../Playlist';

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
  slug: string;
  byline: string;
  description: any;
  playlist: any;
}

const PlaylistInformation = ({
  title,
  slug,
  byline,
  description,
  length,
}: {
  title: string;
  slug: string;
  byline: string;
  description: any;
  length: number;
}) => {
  return (
    <>
      <div className="container">
        <h2>{`Playlist: ${title}`}</h2>
        <div className="label-medium">{byline}</div>
        <div className="tease-lede">
          <PortableText value={description} />
        </div>
        <div className="label-medium story-count">{`${length} stories`}</div>
        <CTAButton label="Read More" href={`/playbook/playlists/${slug}`} />
      </div>
      <style jsx>{`
        h2 {
          margin-bottom: 1.25rem;
          margin-top: 0;
        }
        .label-medium {
          color: var(--blueThree);
        }
        .container {
          grid-column: 1/3;
          padding-top: 1.25rem;
          padding-right: 1.25rem;
        }
        .story-count {
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
        @media only screen and (max-width: 768px) {
          .container {
            padding: 0 1.25rem;
            padding-top: 2.5rem;
            margin-bottom: 2.5rem;
            grid-column: 1/-1;
          }
        }
      `}</style>
    </>
  );
};

const SeeAll = () => {
  return (
    <>
      <div className="see-all">
        <BorderCTAButton label="See All Playlists" href="/playbook/playlists" />
      </div>
      <style jsx>{`
        .see-all {
          grid-column: 1/-1;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
};

const Playlist = ({
  data,
  includeSeeAll = false,
  onActionButtonClicked,
}: {
  data: PlaylistData;
  includeSeeAll?: boolean;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  const [hovered, setHovered] = useState(false);

  const { className, styles } = getStyles();
  const { title, slug, byline, description, playlist } = data;
  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        <PlaylistInformation
          title={title}
          slug={slug}
          byline={byline}
          description={description}
          length={playlist.length}
        />
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="right"
        >
          <CardRow
            playlist={playlist}
            shadowActive={!hovered}
            onActionButtonClicked={onActionButtonClicked}
          />
        </div>
      </motion.div>
      {includeSeeAll && <SeeAll />}
      {styles}
      <style jsx>{`
        .right {
          grid-column: 3/5;
          display: flex;
          overflow: hidden;
          position: relative;
          margin-right: -2.5rem;
          padding-top: 1.25rem;
        }
        @media only screen and (max-width: 768px) {
          .right {
            max-width: 100vw;
            overflow-x: scroll;
            grid-column: 1/-1;
          }
        }
      `}</style>
    </>
  );
};

export default Playlist;
