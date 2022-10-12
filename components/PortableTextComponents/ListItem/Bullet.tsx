import { motion } from 'framer-motion';

const Bullet = (props) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const { children } = props;
  return (
    <motion.li
      className="body"
      variants={item}
      transition={{ duration: 0.7, type: 'tween', ease: 'easeInOut' }}
    >
      {children}
    </motion.li>
  );
};

export default Bullet;
