import Layout from '../Layout/Layout';
import SearchInformation from './SearchInformation';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SearchInformation />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
