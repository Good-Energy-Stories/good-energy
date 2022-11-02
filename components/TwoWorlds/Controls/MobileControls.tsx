import { observer } from 'mobx-react-lite';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCallback } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import {
  useTwoWorldsStore,
  useTwoWorldsSwitcherStore,
} from '../../../providers/RootStoreProvider';
import styles from './MobileControls.module.css';
import Button from './Button';

const MobileControls = observer(() => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [500, 800], [0, 1]);
  const y = useTransform(scrollY, [500, 800], [30, 0]);

  const { isCollapseMode, isRiseMode } = useTwoWorldsStore();

  const switchStore = useTwoWorldsSwitcherStore();

  const switchToRise = useCallback(() => {
    return switchStore.makeModeRise();
  }, [switchStore]);

  const switchToCollapse = useCallback(() => {
    return switchStore.makeModeCollapse();
  }, [switchStore]);

  const toggleMode = useCallback(() => {
    if (isCollapseMode) {
      switchToRise();
    } else {
      switchToCollapse();
    }
  }, [isCollapseMode, switchToCollapse, switchToRise]);

  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        style={{ opacity, y }}
        className={styles.container}
      >
        <Button label="Switch Scenarios" onClick={toggleMode} />
      </motion.div>
    </>
  );
});

export default MobileControls;
