/**
 * Homepage footer.
 */

import Nav from './Nav';
import styles from './Footer.module.css';
import Socials from './Socials';
import ContactForm from './ContactForm/ContactForm';
import Copyright from './Copyright';

const Footer = ({ navigation, socials }: any) => {
  return (
    <footer className={styles.container}>
      <Nav data={navigation} />
      <div className={styles.right}>
        <h3 className="title">Newsletter Sign Up</h3>
        <p className="body">
          Be the first to know when we release new resources and offerings.
        </p>
        <ContactForm />
      </div>
      <div className={styles.bottom}>
        <Socials socials={socials} />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
