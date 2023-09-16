/**
 * Our Offerings section container for homepage.
 */

import styles from './OurOfferings.module.css';
import Heading from '../../Heading/Heading';
import Offering from './Offering';

const OurOfferings = ({ data }) => {
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

export default OurOfferings;
