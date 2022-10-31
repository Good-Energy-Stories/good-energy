import Illustration from './Illustration';
import styles from './CompareSection.module.css';
import HalfSection from './HalfSection';
import { useTwoWorldsStore } from '../../../providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';
import { MODE } from '../../../stores/TwoWorldsStore';

const CompareSection = observer(({ data }: { data: any }) => {
  const { year, rise, collapse, collapseIllustration, riseIllustration } = data;

  const { isCollapseMode, isRiseMode } = useTwoWorldsStore();

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
      <div className={styles.container}>
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
      </div>
    </>
  );
});

export default CompareSection;
