import styles from './Link.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const Link = ({ value, children }: any) => {
  const target = (value?.url || value?.href || '').startsWith('http')
    ? '_blank'
    : undefined;
  return (
    <a
      className={cx('body-link', styles.link)}
      href={value?.url || value?.href}
      target={target}
      rel={target === '_blank' && 'noindex nofollow'}
    >
      {children}
    </a>
  );
};
export default Link;
