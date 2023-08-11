import classNames from 'classnames';
import styles from './NewsletterCTA.module.css';
const cx = classNames.bind(styles);

const NewsletterCTA = ({ data }: { data: any }) => {
  // const { logo, size, link } = data;
  return (
    <>
      <div className={cx(styles.container)}>
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
};

export default NewsletterCTA;
