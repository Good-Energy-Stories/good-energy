import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import css from 'styled-jsx/css';
import CharacterProfileCard, {
  CharacterProfileCardStyle,
} from './CharacterProfileCard';
import CarouselItem from './CharacterProfilePageCarousel/CarouselItem';

function getStyles() {
  return css.resolve`
    div {
      width: 100%;
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
const MotionCarouselItem = motion(CarouselItem);

const CharacterProfilePageCarousel = ({
  data,
  index,
  last,
}: {
  data: any;
  index: number;
  last: boolean;
}) => {
  const { className, styles } = getStyles();

  const { characterProfiles } = data;

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.floor(Math.random() * (characterProfiles.length - 1)));
    }, 8000);
    return () => clearInterval(interval);
  }, []);
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
        <AnimatePresence exitBeforeEnter initial={false}>
          {characterProfiles.map((c, i) => {
            return (
              count === i && (
                <MotionCarouselItem
                  key={c.name}
                  transition={{ duration: 2 }}
                  initial={'out'}
                  animate={'in'}
                  exit={'out'}
                  variants={variants}
                  data={c}
                  last={last}
                />
              )
            );
          })}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .layout {
          position: relative;
          margin: 0 auto;
          min-height: 400px;
        }

        @media only screen and (max-width: 768px) {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default CharacterProfilePageCarousel;
