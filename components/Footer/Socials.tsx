import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import styles from './Socials.module.css';
const Socials = ({ socials }) => {
  const { twitter, instagram, facebook } = socials;

  return (
    <div className={styles.container}>
      {twitter !== null && (
        <a
          className={styles.link}
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
      )}

      {instagram !== null && (
        <a
          className={styles.link}
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
      )}

      {facebook !== null && (
        <a
          className={styles.link}
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
      )}
    </div>
  );
};

export default Socials;
