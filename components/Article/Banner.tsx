import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import ImageLoader from '../ImageLoader';
function getStyles(isInPlaylist) {
  return css.resolve`
    div {
      overflow: hidden;
      grid-column: 1/-1;
      grid-row-start: 1;
      width: 100%;
      height: auto;
      max-height: 100vh;
    }
    @media only screen and (max-width: 1080px) {
      div {
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

const Banner = ({
  image,
  isInPlaylist,
}: {
  image: any;
  isInPlaylist: boolean;
}) => {
  const { className, styles } = getStyles(isInPlaylist);
  if (!image) return null;
  return (
    <motion.div
      transition={{ duration: 2 }}
      variants={variants}
      className={className}
    >
      <ImageLoader alt={image?.caption} width={1920} src={image} />

      <style jsx>{`
        img {
          max-width: 100%;
          min-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Banner;
