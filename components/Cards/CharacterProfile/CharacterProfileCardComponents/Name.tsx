import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    margin-top: 1.25rem;
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
      <h3>{name}</h3>

      <style jsx>{`
        .open-quote {
        }
        h3 {
          margin: 0.625rem auto;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Name;
