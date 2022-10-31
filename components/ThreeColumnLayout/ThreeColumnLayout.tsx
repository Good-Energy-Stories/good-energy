import LeftColumn from './LeftColumn/LeftColumn';
import MainColumn from './MainColumn/MainColumn';
import RightColumn from './RightColumn/RightColumn';
import styles from './ThreeColumnLayout.module.css';
interface ThreeColumnLayoutData {
  leftColumn: any[];
  mainColumn: any[];
  rightColumn: any[];
}

export enum ThreeColumnLayoutStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export const ThreeColumnLayout = ({
  data,
  style = ThreeColumnLayoutStyle.PRIMARY,
  secondaryStyle = ThreeColumnLayoutStyle.SECONDARY,
}: {
  data: ThreeColumnLayoutData;
  style?: ThreeColumnLayoutStyle;
  secondaryStyle?: ThreeColumnLayoutStyle;
}) => {
  const { leftColumn, mainColumn, rightColumn } = data;
  const secondaryColumnsEmpty = leftColumn === null && rightColumn === null;
  return (
    <div className={styles.container}>
      <LeftColumn data={leftColumn} style={secondaryStyle} />
      <MainColumn
        data={mainColumn}
        style={style}
        secondaryColumnsEmpty={secondaryColumnsEmpty}
      />
      <RightColumn data={rightColumn} style={secondaryStyle} />
    </div>
  );
};

export default ThreeColumnLayout;
