import Head from 'next/head';
import Image from 'next/image';
import { sanity } from '../../lib/sanity';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import { getRandomColor } from '../../utils/getRandomColor';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    height: 10px;
    width: 10px;
    border-radius: 5px;
    border: 1px solid var(--blueThree);
    margin: 0 3px;
  }
  @media only screen and (max-width: 768px) {
  }
`;

const variants = {
  active: {
    backgroundColor: 'var(--blueThree)',
  },
  out: {
    backgroundColor: 'transparent',
  },
};

const IndicatorDot = ({
  onClick,
  active,
}: {
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <motion.div
      className={className}
      animate={active ? 'active' : 'inactive'}
      variants={variants}
      onClick={onClick}
    >
      {styles}
    </motion.div>
  );
};

export default IndicatorDot;
