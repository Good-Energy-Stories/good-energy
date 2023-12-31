import styles from './SearchBar.module.css';
import classnames from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useHeaderTheme from '../../../utils/useHeaderTheme';
const cx = classnames.bind(styles);
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push({
        pathname: '/playbook/search',
        query: { query: searchQuery },
      });
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const theme = useHeaderTheme();
  if (router.asPath.includes('/playbook/search')) return null;
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <svg
          className={styles.icon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-theme={theme}
        >
          <path d="M13.1296 11.8796H12.4712L12.2379 11.6546C13.0546 10.7046 13.5462 9.47122 13.5462 8.12956C13.5462 5.13789 11.1212 2.71289 8.12956 2.71289C5.13789 2.71289 2.71289 5.13789 2.71289 8.12956C2.71289 11.1212 5.13789 13.5462 8.12956 13.5462C9.47122 13.5462 10.7046 13.0546 11.6546 12.2379L11.8796 12.4712V13.1296L16.0462 17.2879L17.2879 16.0462L13.1296 11.8796ZM8.12956 11.8796C6.05456 11.8796 4.37956 10.2046 4.37956 8.12956C4.37956 6.05456 6.05456 4.37956 8.12956 4.37956C10.2046 4.37956 11.8796 6.05456 11.8796 8.12956C11.8796 10.2046 10.2046 11.8796 8.12956 11.8796Z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cx('label-medium', styles.input)}
        data-theme={theme}
      />
    </div>
  );
};
export default SearchBar;
