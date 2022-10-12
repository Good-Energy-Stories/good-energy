import { useCallback } from 'react';
import { Card } from '../../Cards';
import ThirdPageContent from '../ThirdPageContent';
import {
  getSecondaryColumnCardStyle,
  getSecondaryColumnCharacterProfileCardStyle,
  ThreeColumnLayoutStyle,
} from '../ThreeColumnLayout';
import styles from './LeftColumn.module.css';

const LeftColumn = ({
  data,
  style,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
}) => {
  const leftColumnCardStyle = getSecondaryColumnCardStyle(style);
  const leftColumnCharacterProfileCardStyle =
    getSecondaryColumnCharacterProfileCardStyle(style);
  const renderContent = useCallback((content: any) => {
    return content.map((item, index) => (
      <ThirdPageContent key={index} content={item} />
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
