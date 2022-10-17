import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import ExpertTypeToggleButton from './ExpertTypeToggleButton';

const ExpertTypeToggle = observer(() => {
  const store = useStore();
  const {
    dataStore: { setLibraryOfExpertsCategory, libraryOfExpertsCategory },
  } = store;
  const tabs = [
    { label: 'Individuals', value: 'individual' },
    { label: 'Organizations', value: 'organization' },
  ];
  return (
    <div className="container">
      {tabs.map((tab) => (
        <ExpertTypeToggleButton
          key={tab.value}
          label={tab.label}
          onClick={() => setLibraryOfExpertsCategory(tab.value)}
          active={tab.value === libraryOfExpertsCategory}
        />
      ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        @media only screen and (max-width: 768px) {
          .container {
            margin-bottom: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
});

export default ExpertTypeToggle;
