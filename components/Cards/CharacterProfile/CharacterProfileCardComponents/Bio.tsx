import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    margin-bottom: 0.625rem;
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

const Bio = ({ bio }: { bio: string }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout tease-lede-small">{bio}</div>

      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Bio;
