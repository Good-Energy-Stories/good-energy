import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { imageUrlFor } from '../../../../utils/imageUrlFor';

const { className, styles } = css.resolve`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

export enum PortraitSizes {
  extraSmall = 120,
  small = 200,
  medium = 260,
  large = 360,
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Portrait = ({
  image,
  size = PortraitSizes.medium,
  inset = false,
  backgroundColor = 'var(--greyBlue)',
}: {
  image: any;
  size?: PortraitSizes;
  inset?: boolean;
  backgroundColor?: string;
}) => {
  const insetFactor = inset ? 20 : 0;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="frame">
        <img
          alt={image?.caption}
          src={imageUrlFor(image).height(size).width(size).url()}
        />
      </div>
      <style jsx>{`
        .frame {
          background-color: ${backgroundColor};
          min-width: ${size}px;
          min-height: ${size}px;
          max-width: ${size}px;
          max-height: ${size}px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          min-width: ${size - insetFactor}px;
          min-height: ${size - insetFactor}px;
          max-width: ${size - insetFactor}px;
          max-height: ${size - insetFactor}px;

          overflow: hidden;
        }
        @media only screen and (max-width: 768px) {
          img {
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Portrait;
