import styles from './IndividualPressFeature.module.css';
import classnames from 'classnames';
import PressCard, { PressCardType } from '../Cards/PressCard';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';
import CTAButton from '../../Buttons/CTAButton/CTAButton';
const cx = classnames.bind(styles);

const IndividualPressFeature = ({ data }: any) => {
  const { title, description, press } = data;
  console.log('oyyy', press);

  return (
    <article className={styles.container}>
      <div className={cx(styles.textContainer)}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
        </div>
        <CTAButton data={{ label: 'See More Press', link: '/about/press' }} />
      </div>
      <div className={styles.pressContainer}>
        <PressCard type={PressCardType.Half} data={press} />
      </div>
    </article>
  );
};

export default IndividualPressFeature;
