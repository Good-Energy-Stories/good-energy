import React from 'react';
import { motion } from 'framer-motion';

const AnimatedUnderline = ({ active }) => {
  const variants = {
    open: { width: '100%' },
    closed: { width: '0%' },
  };
  const strokeWidth = 4;
  return (
    <motion.span
      animate={active ? 'open' : 'closed'}
      variants={variants}
      transition={{ ease: 'easeInOut', delay: 0.4, duration: 0.2 }}
      style={{
        position: 'absolute',
        bottom: -strokeWidth,
        left: '0',
        height: strokeWidth,
        background: 'var(--blueFour)',
      }}
    />
  );
};

export default AnimatedUnderline;
