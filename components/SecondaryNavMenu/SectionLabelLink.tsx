import Link from 'next/link';
import { motion } from 'framer-motion';

const SectionLabelLink = ({ title, slug }) => {
  return (
    <>
      <Link href={`/playbook/${slug}`}>
        <a className="playbook-toc-nav-link-small">
          <motion.span whileHover={{ opacity: 0.6 }}>{title}</motion.span>
        </a>
      </Link>

      <style jsx>{`
        .playbook-toc-nav-link-small {
          color: var(--black);
          margin: 0 0.625rem;
          padding: 0.625rem 0.625rem;
          border-bottom: 1px solid var(--greyBlue);
        }
        .playbook-toc-nav-link-small:last-of-type {
          border: 0;
        }
      `}</style>
    </>
  );
};

export default SectionLabelLink;
