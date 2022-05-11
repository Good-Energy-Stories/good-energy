import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import Left from './Left';
import Right from './Right';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    background-color: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 1.25rem 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 1.25rem 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
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

const Footer = ({
  includeContactForm = true,
}: {
  includeContactForm?: boolean;
}) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Left />
      <Right includeContactForm={includeContactForm} />
      {styles}
    </motion.div>
  );
};

export default Footer;
