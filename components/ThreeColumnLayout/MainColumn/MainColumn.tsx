import { useCallback } from 'react';
import { Card } from '../../Cards';
import ThirdPageContent from '../ThirdPageContent';
import {
  getPrimaryColumnArticleCardStyle,
  getPrimaryColumnCharacterProfileCardStyle,
  ThreeColumnLayoutStyle,
} from '../ThreeColumnLayout';
import styles from './MainColumn.module.css';

const MainColumn = ({
  data,
  style,
  secondaryColumnsEmpty,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
  secondaryColumnsEmpty: boolean;
}) => {
  const mainColumnArticleCardStyle = getPrimaryColumnArticleCardStyle(style);
  const mainColumnCharacterProfileCardStyle =
    getPrimaryColumnCharacterProfileCardStyle(style);

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

export default MainColumn;
