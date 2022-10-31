import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './Header.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const Header = ({ title, byline }: { title: string; byline: string }) => {
  return (
    <header className={styles.container}>
      <Breadcrumbs className={styles.breadcrumbs} />
      <h1 className={styles.title}>{title}</h1>
      <div className={cx('subhead', styles.author)}>{byline}</div>
    </header>
  );
};

export default Header;
