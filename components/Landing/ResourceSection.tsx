import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../PageDivider/PageDivider';
import { Card } from './ResourceCard';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    grid-column: 1/-1;
    width: 100%;
    margin-bottom: 1.25rem;

    padding-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const ResourceSection = ({ data }: { data: any }) => {
  const { title, resources } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <PageDivider label={title} />
      {resources.map((r, i) => (
        <Card key={i} content={r} index={i} />
      ))}
      <style jsx>{`
        .article-link {
        }

        .line {
          width: 100%;
          border-top: 4px solid var(--black);
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ResourceSection;
