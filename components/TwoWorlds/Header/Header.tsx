import styles from './Header.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Header = ({
  title,
  smallTitle,
}: {
  title: string;
  smallTitle: string;
}) => {
  return (
    <div className={styles.container}>
      <h3>{smallTitle}</h3>
      <h1 className={styles.title}>{title}</h1>

      <div>
        <div className={cx('label-medium')}>Scroll</div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path d="M19 15L17.59 13.59L13 18.17V2H11V18.17L6.41 13.58L5 15L12 22L19 15Z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
