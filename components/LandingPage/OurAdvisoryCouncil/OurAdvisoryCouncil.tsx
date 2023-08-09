import classnames from 'classnames';
import styles from './OurClients.module.css';
import Photo from '../../Photo/Photo';
const cx = classnames.bind(styles);

const OfferingsPage = ({ data }) => {
  const { title, description, clients } = data;
  return (
    <div data-theme={'white'} className={styles.container}>
      <h4 className={styles.title + ' h4-updated'}>{title}</h4>
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
    </div>
  );
};

export default OfferingsPage;
