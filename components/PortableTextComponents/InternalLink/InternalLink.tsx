import Link from 'next/link';
import styles from './InternalLink.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const InternalLink = ({ value, children }: any) => {
  const { slug = {} } = value;
  const href = `/${slug.current}`;
  return (
    <Link href={`/playbook/${href}`}>
      <a className={cx('body-link', styles.link)}>{children}</a>
    </Link>
  );
};
export default InternalLink;
