import Footnote from './Footnote';
import styles from './DesktopFootnotes.module.css';

const DesktopFootnotes = ({ footnotes }: { footnotes: any }) => {
  return (
    <div className={styles.container}>
      {footnotes.map((f) => {
        if (f._type === 'footnote') {
          return <Footnote key={f.text} text={f.text} number={f.number} />;
        }
      })}
    </div>
  );
};

export default DesktopFootnotes;
