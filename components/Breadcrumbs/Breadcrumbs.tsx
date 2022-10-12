import styles from './Breadcrumbs.module.css';

import NextBreadcrumbs from 'nextjs-breadcrumbs';
import { useCallback } from 'react';
import classnames from 'classnames';

const cx = classnames.bind(styles);

const Chevron = ({ fill }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={styles.chevron}
    >
      <path d="M8.29508 7.91L9.70508 6.5L15.7051 12.5L9.70508 18.5L8.29508 17.09L12.8751 12.5L8.29508 7.91Z" />
    </svg>
  );
};

const ROOT_LABEL = 'Good Energy';

const Breadcrumbs = ({ className, ...props }: any) => {
  const renderLabels = useCallback((title) => {
    const formattedTitle = title.replaceAll('-', ' ');
    if (title === ROOT_LABEL) {
      return (
        <span className={cx(styles.label, styles.rootLabel, 'label-medium')}>
          {formattedTitle}
        </span>
      );
    }
    return (
      <span className={cx(styles.label, 'label-medium')}>
        <Chevron fill={'var(--black)'} />
        {formattedTitle}
      </span>
    );
  }, []);
  return (
    <NextBreadcrumbs
      rootLabel={ROOT_LABEL}
      labelsToUppercase
      containerClassName={cx(styles.container, className)}
      listClassName={styles.list}
      inactiveItemClassName={styles.inactiveItem}
      activeItemClassName={styles.activeItem}
      transformLabel={renderLabels}
      {...props}
    />
  );
};

export default Breadcrumbs;
