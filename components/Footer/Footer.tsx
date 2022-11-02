import css from 'styled-jsx/css';
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
        <h4 className="title">Stay in Touch</h4>
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
