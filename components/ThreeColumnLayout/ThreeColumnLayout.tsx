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
  primary = 'primary',
  secondary = 'secondary',
}

export const ThreeColumnLayout = ({
  data,
  style,
}: {
  data: ThreeColumnLayoutData;
  style?: ThreeColumnLayoutStyle;
}) => {
  const { leftColumn, mainColumn, rightColumn } = data;

  return (
    <div className={styles.container}>
      <LeftColumn data={leftColumn} style={style} />
      <MainColumn
        data={mainColumn}
        style={style}
        secondaryColumnsEmpty={leftColumn === null && rightColumn === null}
      />
      <RightColumn data={rightColumn} style={style} />
    </div>
  );
};

export default ThreeColumnLayout;
