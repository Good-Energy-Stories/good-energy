import { motion } from 'framer-motion';
import styles from './NavSection.module.css';
import NavItem from './NavItem';
import { useState } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
import classnames from 'classnames';
import useWindowDimensions from '../../../utils/useWindowDimenions';
import useDimensions from '../../../utils/useDimenions';

const cx = classnames.bind(styles);

const NavSection = ({ data, depth }) => {
  const { title, contents } = data;
  const windowDimensions = useWindowDimensions();
  const [ref, { x, width }] = useDimensions();

  const extendedPastWindow = Math.abs(windowDimensions.width - x + width) < 500;
  const [expanded, setExpanded] = useState(false);
  const isNested = depth > 0;
  return (
    <>
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        aria-haspopup="true"
        className={styles.container}
      >
        <div
          className={cx(
            'sub-nav-link-md',
            styles.title,
            isNested ? styles.nested : styles.topLevel,
          )}
        >
          <span>{title}</span>
        </div>

        {(isNested || expanded) && (
          <ul ref={ref} className={styles.list}>
            <motion.div
              style={{
                left: extendedPastWindow ? 'auto' : '0%',
                right: extendedPastWindow ? '0%' : 'auto',
                paddingLeft: `calc(${depth + 1} * var(--spacing-small))`,
              }}
              className={cx(
                depth > 0 ? styles.submenuContainer : styles.menuContainer,
              )}
            >
              {contents?.map((item, index) => (
                <NavItem key={index} data={item} depth={depth + 1} />
              ))}
            </motion.div>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavSection;
