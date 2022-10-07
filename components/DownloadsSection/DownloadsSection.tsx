import styles from './DownloadsSection.module.css';
import classnames from 'classnames';
import CTAButton from '../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const DownloadsSection = ({ data }: any) => {
  const { title, downloadButtons } = data;

  const renderButtons = (content) => {
    return content.map((item, index) => (
      <CTAButton
        key={index}
        className={styles.button}
        data={{ ...item, icon: '/download-icon.svg' }}
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
