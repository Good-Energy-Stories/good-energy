/**
 * Meet Our Experts container section for homepage.
 * Includes expert card infinite scroll effect.
 */

import Heading from '../Heading/Heading';
import styles from './MeetOurExperts.module.css';
import { PortableText } from '@portabletext/react';
import { PortableTextSerializer } from '../';
import classnames from 'classnames';
import ExpertProfileCard, {
  ExpertProfileCardStyle,
} from '../Cards/ExpertProfile/ExpertProfileCard';
import CTAButton, { ButtonLabelSize } from '../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const MeetOurExperts = ({ data }: any) => {
  const { title, description, CTAText, CTALink, expertProfiles } = data;

  // RENDER FOUR EXTRA EXPERTS TO SMOOTH INFINITE SCROLL EFFECT
  const profilesCopy = JSON.parse(JSON.stringify(expertProfiles));
  const renderedExperts = expertProfiles.concat([
    profilesCopy[0],
    profilesCopy[1],
    profilesCopy[2],
    profilesCopy[3],
  ]);

  const renderExperts = (content) => {
    return content.map((expert, index) => {
      return (
        <ExpertProfileCard
          style={ExpertProfileCardStyle.small}
          data={expert}
          key={index}
          index={index}
          forceDesktop={true}
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
      <div className={cx(styles.column, styles.gradientFade)}>
        <div
          className={cx(
            styles.expertCardContainer,
            styles.primary,
            styles.scrollElement,
          )}
        >
          {renderExperts(renderedExperts)}
        </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
