import Link from 'next/link';
import css from 'styled-jsx/css';
import { motion } from 'framer-motion';

function getStyles() {
  return css.resolve`
    div {
      line-height: 0.8rem;
      margin-bottom: 0.625rem;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0;
      }
    }
  `;
}

const SubsectionLabel = ({ title, slug }) => {
  const { styles, className } = getStyles();
  return (
    <>
      <motion.div whileHover={{ opacity: 0.6 }} className={className}>
        <Link href={`/playbook/${slug}`}>
          <a className="playbook-toc-nav-link-extra-small">{title}</a>
        </Link>
      </motion.div>
      {styles}
      <style jsx>{`
        .playbook-toc-nav-link-extra-small {
          color: var(--black);
        }
      `}</style>
    </>
  );
};

export default SubsectionLabel;
