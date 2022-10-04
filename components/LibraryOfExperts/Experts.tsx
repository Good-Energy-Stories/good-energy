import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Card } from '../Cards';

const Experts = observer(() => {
  const store = useStore();
  const {
    dataStore: { filteredLibraryOfExpertsResults },
  } = store;

  return (
    <div>
      {filteredLibraryOfExpertsResults.map((e, i) => {
        return (
          <Card
            key={e.name}
            index={i}
            content={e}
            last={i === filteredLibraryOfExpertsResults.length - 1}
          />
        );
      })}
      <style jsx>{`
        div {
          grid-column: 1/-1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 768px) {
          div {
            padding: 0 1.25rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Experts;
