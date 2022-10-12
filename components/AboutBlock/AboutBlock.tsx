import styles from './AboutBlock.module.css';
import classnames from 'classnames';
import CTALink from '../Buttons/CTALink/CTALink';
const cx = classnames.bind(styles);

const AboutBlock = ({ data }: any) => {
  const { content, backgroundColor } = data;
  return (
    <div data-theme={backgroundColor} className={styles.container}>
      <div className={styles.textContainer}>
        <div className={cx('quote-lg', styles.title)}>{content}</div>
        <CTALink
          data={{ label: 'About Good Energy', link: '/about/story-of-us' }}
        />
      </div>
      <img className={styles.image} src="fern.png" />
    </div>
  );
};

export default AboutBlock;
