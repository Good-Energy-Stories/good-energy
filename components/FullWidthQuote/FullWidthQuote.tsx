import styles from './FullWidthQuote.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const SourceLink = ({ data }: any) => {
  const { url } = data;
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cx('h3-subheading-italic', styles.url)}
      >
        {data.title}
      </a>
    );
  }

  return data.title;
};

const FullWidthQuote = ({ data }: any) => {
  const { quote, attribution } = data;
  if (!quote) return null;
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.inner)}>
        <div className={cx('quote-md', styles.quote)}>{quote}</div>
        <div className={styles.attribution}>
          {attribution?.name && (
            <div className={cx('h3', styles.name)}>{attribution.name}</div>
          )}

          <div className={cx('h3-subheading', styles.name)}>
            {attribution.title}
            {attribution?.source && (
              <span className={cx('h3-subheading-italic', styles.source)}>
                {attribution?.title && `, `}
                <SourceLink data={attribution.source} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthQuote;
