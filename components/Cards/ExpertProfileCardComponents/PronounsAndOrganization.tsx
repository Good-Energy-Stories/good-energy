import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';

const { className, styles } = css.resolve`
  div {
    margin-bottom: 0.625rem;
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

const PronounsAndOrganization = ({
  pronouns,
  organization,
}: {
  pronouns: string;
  organization: string;
}) => {
  const formatted = [pronouns, organization].join(
    pronouns && organization ? ' • ' : '',
  );
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="label-medium">{formatted}</div>

      <style jsx>{`
        .label-medium {
          color: var(--blueThree);
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default PronounsAndOrganization;
