import classnames from 'classnames';
import styles from './OurClients.module.css';
import Photo from '../../Photo/Photo';
import Heading from '../../Heading/Heading';
import SeeMoreButton from '../../Buttons/SeeMoreButton/SeeMoreButton';
const cx = classnames.bind(styles);

const OfferingsPage = ({ data }) => {
  const { title, description, clients, CTAText, CTALink } = data;
  return (
    <div data-theme={'white'} className={styles.container}>
      <Heading title={title} />
      <div className={styles.paragraphContainer}>
        <p className="body-small">{description}</p>
      </div>
      <div className={styles.clientContainer}>
        {clients?.map((item, index) => {
          return (
            <Photo
              className={cx(styles.photo, index > 0 && styles.hiddenMobile)}
              key={index}
              photo={item.logo}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <SeeMoreButton className={'header'} label={CTAText} link={CTALink} />
      </div>
    </div>
  );
};

export default OfferingsPage;
