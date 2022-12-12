import styles from './PageNotFound.module.css';
import classnames from 'classnames';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import CTAButton from '../Buttons/CTAButton/CTAButton';

const cx = classnames.bind(styles);

export const PageNotFound = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <div className={styles.message}>
        <PortableText
          value={data.description}
          components={PortableTextSerializer}
        />
      </div>
      <CTAButton
        data={{ label: 'Go Back Home', link: '/' }}
        className={styles.button}
      />
    </div>
  );
};

export default PageNotFound;
