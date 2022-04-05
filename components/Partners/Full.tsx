import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../PageDivider';
import { Card } from './';
const { className, styles } = css.resolve`
  div {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    grid-column: 1/-1;

    margin-bottom: 2.5rem;
    margin-top: -1.25rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column-gap: 0;
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

const Full = ({ data }: { data: any }) => {
  const { title, partners } = data;
  const partnersFormatted =
    partners.length < 6 ? partners : partners.slice(0, 6);
  return (
    <>
      <PageDivider label={title} />
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        {partnersFormatted.map((p, i) => (
          <Card key={i} data={p} />
        ))}

        {styles}
      </motion.div>
    </>
  );
};

export default Full;
