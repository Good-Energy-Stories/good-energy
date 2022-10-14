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
      <li className={styles.container} onMouseLeave={() => setExpanded(false)}>
        <div
          aria-haspopup="true"
          className={cx(
            'sub-nav-link-md',
            styles.title,
            isNested ? styles.nested : styles.topLevel,
          )}
          data-expanded={expanded}
          onMouseEnter={() => setExpanded(true)}
        >
          <span>{title}</span>
        </div>

        {(isNested || expanded) && (
          <ul
            ref={ref}
            className={cx(
              styles.list,
              isNested ? styles.nestedList : styles.topLevelList,
            )}
          >
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
      </li>
    </>
  );
};

export default NavSection;
