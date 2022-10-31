import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { imageUrlFor } from '../../../utils/imageUrlFor';

function getStyles(illustrationPosition) {
  return css.resolve`
    div {
      grid-column: ${illustrationPosition === 'inline' ? '2/4' : '4/5'};
      height: 100%;
      display: flex;
      align-items: center;
      margin-top: 1.25rem;
      margin-left: ${illustrationPosition === 'inline' ? '0' : '0'};
      margin-right: ${illustrationPosition === 'inline' ? '0' : '1.25rem'};
    }
    @media only screen and (max-width: 768px) {
      div {
        margin: 0 1.25rem;
        grid-column: 1/-1;
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

const SpotIllustration = ({
  image,
  illustrationPosition,
}: {
  image: any;
  illustrationPosition: string;
}) => {
  const { className, styles } = getStyles(illustrationPosition);
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
      <img
        alt={image?.caption}
        src={imageUrlFor(image)
          .width(illustrationPosition === 'inline' ? 1000 : 400)
          .url()}
      />

      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default SpotIllustration;
