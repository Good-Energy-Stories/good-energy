import css from 'styled-jsx/css';
import Nav from './Nav';
import Right from './Right';

const { className, styles } = css.resolve`
  div {
    display: inline-block;

    width: 100%;
    background-color: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 1.25rem 2.5rem;
    border-top: 1px solid var(--text);
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 1.25rem 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

const Footer = ({ navigation }: any) => {
  return (
    <div className={className}>
      <Nav data={navigation} />
      <Right includeContactForm />
      {styles}
    </div>
  );
};

export default Footer;
