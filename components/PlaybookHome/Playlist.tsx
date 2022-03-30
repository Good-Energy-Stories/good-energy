import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { useState } from 'react';
import { CTAButton, BorderCTAButton } from '../';
import { PortableText } from '@portabletext/react';
import { Card, ArticleCardStyle, CharacterProfileCardStyle } from '../Cards';
import { ShadowOverlay } from '../Playlist';

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

const CardRow = ({ playlist }: { playlist: any }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="right"
      >
        <ShadowOverlay active={!hovered} />
        {playlist.map((c, i) => (
          <div key={i} className="card-wrapper">
            <Card
              index={i}
              content={c}
              articleCardStyle={ArticleCardStyle.readMore}
              characterProfileCardStyle={CharacterProfileCardStyle.readMore}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .right {
          grid-column: 3/5;
          display: flex;
          overflow: hidden;
          position: relative;
          margin-right: -2.5rem;
          padding-top: 1.25rem;
        }
        .card-wrapper {
          margin: 0 1.25rem;
        }
      `}</style>
    </>
  );
};

const PlaylistInformation = ({
  title,
  byline,
  description,
  length,
}: {
  title: string;
  byline: string;
  description: any;
  length: number;
}) => {
  return (
    <>
      <div className="container">
        <h2>{`Playlist: ${title}`}</h2>
        <div className="label-medium">{byline}</div>
        <PortableText value={description} />
        <div className="label-medium story-count">{`${length} stories`}</div>
        <CTAButton label="Read More" href="/" />
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
          padding-right: 1.25rem;s
        }
        .story-count {
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </>
  );
};

const SeeAll = () => {
  return (
    <>
      <div className="see-all">
        <BorderCTAButton label="See All Playlists" href="/" />
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

const Playlist = ({ data }: { data: PlaylistData }) => {
  const { className, styles } = getStyles();
  const { title, byline, description, playlist } = data;
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
          byline={byline}
          description={description}
          length={playlist.length}
        />
        <CardRow playlist={playlist} />
      </motion.div>
      <SeeAll />
      {styles}
    </>
  );
};

export default Playlist;
