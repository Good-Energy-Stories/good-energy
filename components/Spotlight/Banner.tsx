import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { imageUrlFor } from '../../utils/imageUrlFor';
function getStyles(isInPlaylist) {
  return css.resolve`
    div {
      max-width: 100%;
    }
    @media only screen and (max-width: 768px) {
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
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <img alt={image?.caption} src={imageUrlFor(image).width(1080).url()} />

      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Banner;
