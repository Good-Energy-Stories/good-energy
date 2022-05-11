import { motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';
import css from 'styled-jsx/css';
import CharacterProfileCard, {
  CharacterProfileCardStyle,
} from '../CharacterProfileCard';

function getStyles() {
  return css.resolve`
    div {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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

const CarouselItem = ({ data, last }: { data: any; last: boolean }, ref) => {
  const { className, styles } = getStyles();

  return (
    <div ref={ref} className={className}>
      <CharacterProfileCard
        data={data}
        last={last}
        style={CharacterProfileCardStyle.small}
      />

      {styles}
    </div>
  );
};
export default forwardRef(CarouselItem);
