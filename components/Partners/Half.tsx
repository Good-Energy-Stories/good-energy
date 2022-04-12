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
      margin-bottom: 1.25rem;
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
      <div className="divider">
        <h4>{title}</h4>
      </div>
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        <div>
          <div className="cards">
            {partnersFormatted.map((p, i) => (
              <div className="card-wrapper" key={i}>
                <Card data={p} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        h4 {
          margin-bottom: 0.625rem;
        }
        .card-wrapper {
          margin-top: ${title === 'Anchor' ? '1.25rem' : 0};
          margin-bottom: ${title === 'Anchor' ? '1.25rem' : 0};
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
        }
        .divider {
          grid-column: span 2;
          border-bottom: 1px solid var(--blueThree);
          width: calc(100%);
          margin: 0;

          margin-bottom: 1.25em;
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
    </>
  );
};

export default Half;
