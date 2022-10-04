import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PLAYBOOK_NAV_HEIGHT } from '../StickyNavBar';
import { ScrollDownPrompt } from '.';

function getStyles() {
  return css.resolve`
    div {
      grid-column: 1/-1;
      height: calc(100vh - ${PLAYBOOK_NAV_HEIGHT}px);

      padding-bottom: 2rem;
      display: grid;
      grid-template-columns: var(--grid-col);
    }
    @media only screen and (max-width: 768px) {
      div {
        grid-column: 1/-1;
        padding: 2.5rem 1.25rem;

        height: auto;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Header = ({
  title,
  smallTitle,
}: {
  title: string;
  smallTitle: string;
}) => {
  const { className, styles } = getStyles();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="titles">
        <h3>{smallTitle}</h3>
        <h1>{title}</h1>
      </div>

      <ScrollDownPrompt />
      <style jsx>{`
        .titles {
          padding-top: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-column: 1/-1;
        }
        h3 {
          grid-column: 1/-1;
          text-align: center;
          margin: 0;

          margin-bottom: 2.5rem;
        }
        h1 {
          grid-column: 1/-1;
          text-align: center;
          margin: 0;
        }
        .body-italic {
          grid-column: 2/4;
          text-align: left;
          margin: 1.25rem 0;
        }
        @media only screen and (max-width: 768px) {
          .body-italic {
            grid-column: 1/-1;
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Header;
