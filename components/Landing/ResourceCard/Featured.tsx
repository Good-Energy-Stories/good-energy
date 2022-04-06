import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Title, Description, Banner } from './ResourceCardComponents';
import { CTAButton } from './';
const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    max-width: 1000px;
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

const Featured = ({ data }: { data: any }) => {
  const { title, description, heroImage, slug } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        <div className="left">
          <Title title={title} />
          <Description description={description} />
          <CTAButton label="Read More" href={`/${slug}`} />
        </div>
        <div className="right">
          <Banner image={heroImage} />
        </div>
      </div>

      <style jsx>{`
        .article-link {
        }
        .layout {
          margin-top: 1.25rem;

          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 1.25rem;
        }
        .left {
          grid-column: 1/2;
          display: flex;
          flex-direction: column;
          align-items: start;
          max-width: 400px;
        }
        .right {
          grid-column: 2/4;
          margin-left: 1.25rem;
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

export default Featured;
