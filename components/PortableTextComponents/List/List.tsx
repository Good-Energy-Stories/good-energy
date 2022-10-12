import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';

const List = (props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ...FRAMER_TRANSITION_FASTEASE,
        staggerChildren: 0.4,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { children } = props;

  return (
    <motion.ul
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {children}
    </motion.ul>
  );
};
export default List;
