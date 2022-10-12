import { imageUrlFor } from '../../../utils/imageUrlFor';
import styles from './Header.module.css';
import classnames from 'classnames';
import CTAButton, { ButtonLabelSize } from '../../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const Header = ({
  title,
  subtitle,
  image,
  donateLink,
}: {
  title: string;
  subtitle: string;
  image: any;
  donateLink: string;
}) => {
  return (
    <div className={styles.container}>
      {image && (
        <img
          className={styles.image}
          alt={image?.caption}
          src={imageUrlFor(image).url()}
        />
      )}
      <div className={styles.textContainer}>
        <div className={cx('h1-xl', styles.title)}>{title}</div>
        <div className={cx('h3-sentence', styles.subtitle)}>{subtitle}</div>
        <div className={styles.buttonContainer}>
          <CTAButton
            className={styles.button}
            data={{
              label: 'Work With Us',
              link: '/offerings/consulting',
              labelSize: ButtonLabelSize.Small,
              type: 'fill',
            }}
          />
          <CTAButton
            className={styles.button}
            data={{
              label: 'Donate',
              link:
                donateLink ??
                'https://creativevisions.networkforgood.com/projects/54417-creative-visions-fiscal-sponsorship-good-energy',
              labelSize: ButtonLabelSize.Small,
              backgroundColor: 'black',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
