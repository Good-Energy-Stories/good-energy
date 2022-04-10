import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { BorderCTAButton } from '..';
import CTAButton from '../CTAButton';
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

const Full = ({
  data,
  truncate = false,
}: {
  data: any;
  truncate?: boolean;
}) => {
  const { title, partners } = data;
  const needsToBeTruncated = partners.length > 6 && truncate;
  const partnersFormatted = needsToBeTruncated
    ? partners.slice(0, 6)
    : partners;
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
        <div className="see-all">
          <BorderCTAButton label="All Partners" href="/about/partners" />
        </div>
        {styles}
        <style jsx>{`
          .see-all {
            grid-column: span 3;
            display: flex;
            justify-content: center;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default Full;
