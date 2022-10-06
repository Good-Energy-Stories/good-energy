import { motion } from 'framer-motion';

import { imageUrlFor } from '../../../utils/imageUrlFor';
import styles from './TwoColumnLayout.module.css';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import classnames from 'classnames';
import { useCallback } from 'react';
import HalfPageContent from './HalfPageContent';
const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const TwoColumnLayout = ({ data }: any) => {
  const { leftColumn, rightColumn, backgroundColor, marginBottom, noPadding } =
    data;

  const renderContent = useCallback((content: any) => {
    return content.map((item, index) => (
      <HalfPageContent key={index} content={item} />
    ));
  }, []);

  return (
    <div
      data-theme={backgroundColor}
      className={cx(
        styles.container,
        !noPadding && styles.padding,
        marginBottom && styles.marginBottom,
      )}
    >
      {leftColumn && (
        <div className={cx(styles.column, styles.left)}>
          {renderContent(leftColumn)}
        </div>
      )}
      {rightColumn && (
        <div className={cx(styles.column, styles.right)}>
          {renderContent(rightColumn)}
        </div>
      )}
    </div>
  );
};

export default TwoColumnLayout;
