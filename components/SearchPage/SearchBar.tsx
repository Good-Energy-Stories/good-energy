import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { SubmitSearchButton } from '.';
import styles from './SearchBar.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const SearchBar = observer(({ query, onKeyDown, onChange, onSubmit }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <input
            className={cx('nav-link-xl', styles.input)}
            type="text"
            placeholder="Search"
            value={query}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
          <SubmitSearchButton onClick={onSubmit} />
        </div>
      </div>
    </>
  );
});

export default SearchBar;
