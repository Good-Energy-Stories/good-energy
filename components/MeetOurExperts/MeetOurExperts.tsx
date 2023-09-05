import Heading from '../Heading/Heading';
import styles from './MeetOurExperts.module.css';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../';
import classnames from 'classnames';
import ExpertProfileCard, {
  ExpertProfileCardStyle,
} from '../Cards/ExpertProfile/ExpertProfileCard';
import CTAButton, { ButtonLabelSize } from '../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const MeetOurExperts = ({ data }: any) => {
  const { title, description, CTAText, CTALink, expertProfiles } = data;
  const renderExperts = (content) => {
    return content.map((expert, index) => {
      return (
        <ExpertProfileCard
          style={ExpertProfileCardStyle.small}
          data={expert}
          key={index}
          index={index}
        />
      );
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
        <div
          className={cx(
            styles.expertCardContainer,
            styles.primary,
            styles.scrollElement,
          )}
        >
          {renderExperts(expertProfiles)}
        </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
