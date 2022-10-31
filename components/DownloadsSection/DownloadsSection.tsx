import styles from './DownloadsSection.module.css';
import classnames from 'classnames';
import CTAButton from '../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const DownloadsSection = ({ data }: any) => {
  const { title, downloadButtons } = data;

  const icon = (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.9941 18L26.8791 15.885L19.9941 22.755V3H16.9941V22.755L10.1091 15.87L7.99414 18L18.4941 28.5L28.9941 18Z"
        fill="var(--text)"
      />
      <line
        x1="7.99414"
        y1="32"
        x2="28.9941"
        y2="32"
        stroke="var(--text)"
        strokeWidth="2"
      />
    </svg>
  );
  const renderButtons = (content) => {
    return content.map((item, index) => (
      <CTAButton
        key={index}
        className={styles.button}
        data={{ ...item, icon }}
      />
    ));
  };
  return (
    <div className={cx(styles.container)}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cx(styles.buttonContainer)}>
        {renderButtons(downloadButtons)}
      </div>
    </div>
  );
};

export default DownloadsSection;
