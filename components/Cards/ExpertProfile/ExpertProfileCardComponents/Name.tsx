import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Name = ({ name }: { name: String }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h2>{name}</h2>

      <style jsx>{`
        h2 {
          margin: 0;
          margin-bottom: 0.625rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Name;
