import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider, { PageDividerSize } from '../PageDivider';
import { Card } from './';
const { className, styles } = css.resolve`
  div {
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    grid-column: span 2;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0px;
      display: grid;

      grid-column: span 4;
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

const Half = ({
  data,
  truncate = false,
}: {
  data: any;
  truncate?: boolean;
}) => {
  const { title, partners } = data;
  const partnersFormatted =
    partners.length > 6 && truncate ? partners.slice(0, 6) : partners;
  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        <div className="divider">
          <h4>{title}</h4>
        </div>
        <div className="cards">
          {partnersFormatted.map((p, i) => (
            <Card key={i} data={p} />
          ))}
        </div>

        <style jsx>{`
          h4 {
            margin-bottom: 0.625rem;
          }
          .divider {
            border-bottom: 1px solid var(--blueThree);
            width: calc(100% - 2.5rem);
            margin: 0 1.25rem;

            margin-bottom: 0em;
            grid-column: span 4;
            display: block;
          }
          .cards {
            grid-column: span 4;
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(
              ${partnersFormatted.length === 1 ? '1' : '3'},
              minmax(0, 1fr)
            );
            justify-content: space-evenly;
            justify-items: center;
          }
        `}</style>
        {styles}
      </motion.div>
    </>
  );
};

export default Half;
