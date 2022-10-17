import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import { Section } from '.';
const { className, styles } = css.resolve`
  div {
    grid-column: 2/8;
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/-1;
      padding: 0 1.25rem;
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

const SingleSection = ({ data, index }: { data: any; index?: number }) => {
  const { _key, title, body, rise, collapse } = data;

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Section index={index} data={data} />
      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default SingleSection;
