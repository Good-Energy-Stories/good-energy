import { useCallback } from 'react';
import ThirdPageContent from '../ThirdPageContent';
import styles from './LeftColumn.module.css';

const LeftColumn = ({ data, style }: any) => {
  const renderContent = useCallback((content: any) => {
    return content.map((item, index) => (
      <ThirdPageContent key={index} style={style} content={item} />
    ));
  }, []);

  if (!data) return null;
  return (
    <>
      <div className={styles.container}>{renderContent(data)}</div>
    </>
  );
};

export default LeftColumn;
