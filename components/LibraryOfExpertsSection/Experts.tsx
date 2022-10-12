import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Card } from '../Cards';
import styles from './Experts.module.css';
const Experts = observer(() => {
  const store = useStore();
  const {
    dataStore: { filteredLibraryOfExpertsResults },
  } = store;

  return (
    <main className={styles.container}>
      {filteredLibraryOfExpertsResults.map((e, i) => {
        return (
          <Card
            key={e._id}
            index={i}
            content={e}
            last={i === filteredLibraryOfExpertsResults.length - 1}
          />
        );
      })}
    </main>
  );
});

export default Experts;
