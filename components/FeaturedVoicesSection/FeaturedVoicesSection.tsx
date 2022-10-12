import chunks from '../../utils/chunks';
import styles from './FeaturedVoicesSection.module.css';
import FeaturedVoicesRow from './FeaturedVoicesRow';

const FeaturedVoicesSection = ({ data }: any) => {
  const { content } = data;

  const rows = chunks(content, 4);
  const renderFeaturedVoiceRows = (rows) => {
    return rows.map((row, index) => {
      return <FeaturedVoicesRow key={index} data={row} />;
    });
  };
  return (
    <div className={styles.container}>{renderFeaturedVoiceRows(rows)}</div>
  );
};

export default FeaturedVoicesSection;
