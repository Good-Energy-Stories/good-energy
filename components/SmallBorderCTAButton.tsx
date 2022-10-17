import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import Link from 'next/link';

const Label = ({ children }) => {
  return (
    <div className="button-text-small">
      {children}
      <span className="arrow">→</span>
      <style jsx>{`
        .button-text-small {
          margin: 0;
          padding: 6px;
          cursor: pointer;
        }

        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
};

const LinkWrapper = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

const SmallBorderCTAButton = ({
  label,
  href = '/',
  color = 'var(--black)',
  onClick,
}: {
  label: string;
  href: string;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.98 }}>
        <div className="container">
          {onClick ? (
            <a onClick={onClick}>
              <Label>{label}</Label>
            </a>
          ) : (
            <LinkWrapper href={href}>
              <Label>{label}</Label>
            </LinkWrapper>
          )}
        </div>
      </motion.div>
      <style jsx>{`
        a {
          color: ${color} !important;
        }
        .button-text-small {
          margin: 0;
          padding: 6px;
        }
        .container {
          display: inline-block;
          position: relative;
          border: 4px solid var(--black);
        }
        .arrow {
          margin-left: 6px;
        }
      `}</style>
    </>
  );
};

export default SmallBorderCTAButton;
