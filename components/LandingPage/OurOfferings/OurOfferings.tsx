import Header from '../../Page/Header/Header';
import Page from '../../Page/Page';
import styles from './OurOfferings.module.css';
import Offering from './Offering';

const OfferingsPage = ({ data }) => {
  const { title, offerings } = data;
  const renderOfferings = (content) => {
    return content.map((item, index) => <Offering key={index} data={item} />);
  };
  return (
    <div data-theme={'black'} className={styles.container}>
      <h4 className={styles.title + ' h4-updated'}>{title}</h4>
      {renderOfferings(offerings)}
    </div>
  );
};

export default OfferingsPage;
