import { useCallback } from 'react';
import Callout from '../Callout/Callout';
import styles from './CalloutSection.module.css';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

enum CalloutSectionTheme {
  Light = 'white',
  Dark = 'black',
}

const CalloutSection = ({ data }: any) => {
  const { title, backgroundColor, content } = data;

  const renderCallouts = useCallback((content: any) => {
    return content.map((item, index) => (
      <Callout key={index} className={styles.callout} data={item} />
    ));
  }, []);
  return (
    <div
      data-theme={
        backgroundColor === CalloutSectionTheme.Dark ? 'dark' : 'light'
      }
      className={styles.container}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {renderCallouts(content)}
    </div>
  );
};

export default CalloutSection;
