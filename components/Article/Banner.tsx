import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PLAYBOOK_NAV_HEIGHT } from '../';
import ImageLoader from '../ImageLoader';
import { SECONDARY_MENU_HEIGHT } from '../SecondaryNavMenu/SecondaryNavMenu';
function getStyles(isInPlaylist) {
  return css.resolve`
    div {
      overflow: hidden;
      grid-column: 1/5;
      grid-row-start: 1;
      width: 100%;
      height: auto;
      max-height: 100vh;
      margin-top: -${isInPlaylist ? 0 : SECONDARY_MENU_HEIGHT}px;
    }
    @media only screen and (max-width: 1080px) {
      div {
        margin-top: -${isInPlaylist ? 0 : PLAYBOOK_NAV_HEIGHT}px;
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
