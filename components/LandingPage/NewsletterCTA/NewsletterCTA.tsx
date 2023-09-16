import styles from './NewsletterCTA.module.css';
import CTAButton, { ButtonLabelSize } from '../../Buttons/CTAButton/CTAButton';

const NewsletterCTA = ({ data }: { data: any }) => {
  const { heading, CTAText, CTALink } = data;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {heading && <h2 className="h2-updated">{heading}</h2>}
      </div>
      <div>
        <CTAButton
          data={{
            type: 'fill',
            labelSize: ButtonLabelSize.Small,
            label: CTAText,
            link: CTALink,
          }}
        />
      </div>
      <img
        className={styles.image}
        src="/email-capture-bg.png"
        alt="Plants and a dragonfly"
      />
    </div>
  );
};

export default NewsletterCTA;
