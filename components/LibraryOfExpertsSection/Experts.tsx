import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Card } from '../Cards';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfile/ExpertProfileCard';
import styles from './Experts.module.css';
const Experts = observer(() => {
  const store = useStore();
  const {
    dataStore: { filteredLibraryOfExpertsResults },
  } = store;

  return (
    <main className={styles.container}>
      {filteredLibraryOfExpertsResults.map((e, index) => {
        return (
          <Card
            key={e._id}
            index={index}
            content={e}
            expertProfileCardStyle={ExpertProfileCardStyle.library}
          />
        );
      })}
    </main>
  );
});

export default Experts;
