import { PortableText } from '@portabletext/react';
import Partner from '../Partners/Partner/Partner';
import PortableTextSerializer from '../PortableTextSerializer';
import styles from './IndividualPartnerFeature.module.css';

const IndividualPartnerFeature = ({ data }: any) => {
  const { description, partner } = data;
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Partner data={partner} />
      </div>
      <div className={styles.statement}>
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
    </div>
  );
};

export default IndividualPartnerFeature;
