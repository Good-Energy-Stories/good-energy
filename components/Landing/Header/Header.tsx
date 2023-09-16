/**
 * Website header.
 */

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
          src={imageUrlFor(image).width(1200).url()}
        />
      )}
      <div className={styles.textContainer}>
        <div className={cx(/*'h1-xl',*/ styles.title)}>{title}</div>
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
              label: 'Make A Donation',
              link: donateLink ?? 'https://goodenergystories.kindful.com/',
              labelSize: ButtonLabelSize.Small,
              newTab: true,
              backgroundColor: 'black',
            }}
          />
        </div>
      </div>
      <div className={styles.videoContainer}>
        <div
          style={{
            padding: '56.25% 0 0 0',
            position: 'relative',
          }}
        >
          <iframe
            title="Good Energy Video"
            src="https://player.vimeo.com/video/802831875?h=9f70d673ed&title=0&byline=0&portrait=0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js" async></script>
      </div>
    </div>
  );
};

export default Header;
