import Heading from '../Heading/Heading';
import styles from './MeetOurExperts.module.css';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../';
import ExpertProfileCard from '../Cards/ExpertProfile/ExpertProfileCard';
import CTAButton, { ButtonLabelSize } from '../Buttons/CTAButton/CTAButton';

const MeetOurExperts = ({ data }: any) => {
  const { title, description, CTAText, CTALink, expertProfiles } = data;
  const renderExperts = (content) => {
    return content.map((expert, index) => {
      return <ExpertProfileCard data={expert} key={index} />;
    });
  };
  return (
    <div data-theme={'black'} className={styles.container}>
      <div className={styles.column}>
        <Heading title={title} />
        <PortableText value={description} components={PortableTextSerializer} />
        <CTAButton
          data={{
            label: CTAText,
            labelSize: ButtonLabelSize.Small,
            link: CTALink,
            backgroundColor: '',
            type: 'fill',
          }}
        />
      </div>
      <div className={styles.column}>
        <motion.div
          layoutScroll
          style={{
            overflow: 'scroll',
            height: '300px',
          }}
        >
          {renderExperts(expertProfiles)}
        </motion.div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
