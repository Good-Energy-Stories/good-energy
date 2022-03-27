import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import ArrowIcon from '../../../public/arrow.svg';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';

const { className, styles } = css.resolve`
  div {
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  expanded: {
    rotate: 0,
  },
  collapsed: {
    rotate: 180,
  },
};

const Arrow = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variants}
      className={className}
    >
      <ArrowIcon />

      {styles}
    </motion.div>
  );
};

const StoryPossibility = ({
  collapsed,
  toggleCollapse,
}: {
  collapsed: boolean;
  toggleCollapse: () => void;
}) => {
  return (
    <>
      <div onClick={toggleCollapse}>
        <h4>Story Possibility</h4>
        <Arrow collapsed={collapsed} />
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        h4 {
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

export default StoryPossibility;
