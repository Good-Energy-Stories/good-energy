import Illustration from './Illustration';
import styles from './CompareSection.module.css';
import HalfSection from './HalfSection';
import {
  useTwoWorldsStore,
  useTwoWorldsSwitcherStore,
} from '../../../providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';
import { MODE } from '../../../stores/TwoWorldsStore';
import { useCallback } from 'react';
import Button from '../Controls/Button';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const CompareSection = observer(({ data }: { data: any }) => {
  const { year, rise, collapse, collapseIllustration, riseIllustration } = data;

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
      <div className={styles.imageContainer}>
        <Illustration
          data={collapseIllustration}
          active={isCollapseMode}
          direction={-1}
        />
        <Illustration
          data={riseIllustration}
          active={isRiseMode}
          direction={1}
        />
      </div>
      <section className={styles.container}>
        <HalfSection
          mode={MODE.COLLAPSE}
          year={year}
          data={collapse}
          active={isCollapseMode}
          direction={-1}
        />
        <HalfSection
          mode={MODE.RISE}
          year={year}
          data={rise}
          active={isRiseMode}
          direction={1}
        />
        <Button
          label="Switch Scenarios"
          onClick={toggleMode}
          disabled={isCollapseMode}
          className={cx(styles.button, styles.collapseButton)}
        />
        <Button
          label="Switch Scenarios"
          onClick={toggleMode}
          disabled={isRiseMode}
          className={cx(styles.button, styles.riseButton)}
        />
      </section>
    </>
  );
});

export default CompareSection;
