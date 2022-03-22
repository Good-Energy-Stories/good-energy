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
    height: 12px;
    width: 12px;
    border-radius: 6px;
    border: 1px solid var(--blueThree);
    margin: 0 3px;
  }
  @media only screen and (max-width: 768px) {
  }
`;

const variants = {
  active: {
    backgroundColor: 'var(--blueThree)',
    transition: { duration: 1 },
  },
  inactive: {
    backgroundColor: 'transparent',
    transition: { duration: 1 },
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
      whileHover={{ opacity: 0.8 }}
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
