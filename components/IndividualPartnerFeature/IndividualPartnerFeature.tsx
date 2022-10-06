import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import Card from '../Partners/Card';
import styles from './IndividualPartnerFeature.module.css';

const IndividualPartnerFeature = ({ data }: any) => {
  const { description, partner } = data;
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Card data={partner} />
      </div>
      <div className={styles.statement}>
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
    </div>
  );
};

export default IndividualPartnerFeature;
