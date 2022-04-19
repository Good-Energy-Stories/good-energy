import Link from 'next/link';
import { motion } from 'framer-motion';
const CTAButton = ({ label, href }: { label: string; href: string }) => {
  return (
    <>
      <motion.div whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.95 }}>
        <Link href={href}>
          <a className="button-text">{label}</a>
        </Link>
      </motion.div>
      <style jsx>{`
        a {
          background-color: var(--blueFour);
          font-family: var(--flexa);
          border: 0 !important;
          white-space: nowrap;
          font-size: 18px;
          font-style: normal;
          font-weight: 604;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: center;
          color: var(--black);
          border: 2px solid var(--black);
          display: inline-block;
          width: 150px;
          padding: 0.3125rem 1.25rem;
          padding-top: 9px;
          text-transform: uppercase;
          float: right;
        }
      `}</style>
    </>
  );
};

export default CTAButton;
