import { FooterLink } from './';
import Link from 'next/link';
import { motion } from 'framer-motion';
const LinkColumn = ({
  label,
  links,
}: {
  label: string;
  links: FooterLink[];
}) => {
  return (
    <>
      <div className="col">
        <h4>{label}</h4>
        {links.map((l) => (
          <Link key={l.label} href={l.href ?? '/'} passHref>
            <a>
              <div className="link">
                <motion.span whileHover={{ opacity: 0.6 }}>
                  {l.label}
                </motion.span>
              </div>
            </a>
          </Link>
        ))}
        <style jsx>{`
          .link {
            margin-bottom: 0.625rem;
            font-size: 20px;
            font-family: var(--flexa);
            font-variation-settings: 'wght' 450, 'wdth' 50;
          }
          .col {
            margin-right: 2.5rem;
          }
          h4 {
            margin-bottom: 1.25rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default LinkColumn;
