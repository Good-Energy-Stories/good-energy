import Header from '../../Page/Header/Header';
import Page from '../../Page/Page';
import styles from './OurOfferings.module.css';
import Heading from '../../Heading/Heading';
import Offering from './Offering';

const OfferingsPage = ({ data }) => {
  const { title, offerings } = data;
  const renderOfferings = (content) => {
    return content.map((item, index) => <Offering key={index} data={item} />);
  };
  return (
    <div data-theme={'black'} className={styles.container}>
      <Heading title={title} />
      {renderOfferings(offerings)}
    </div>
  );
};

export default OfferingsPage;
