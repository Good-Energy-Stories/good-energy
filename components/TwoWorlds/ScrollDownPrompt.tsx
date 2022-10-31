import css from 'styled-jsx/css';
import DownArrowIcon from '../../public/down-arrow.svg';

function getStyles() {
  return css.resolve`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      grid-column: 1/-1;
      height: 30px;
    }
    @media only screen and (max-width: 768px) {
      div {
        display: none;
      }
    }
  `;
}

const ScrollDownPrompt = () => {
  const { className, styles } = getStyles();

  return (
    <div className={className}>
      <div className="label-medium">Scroll</div>
      <span className="arrow">
        <DownArrowIcon />
      </span>

      <style jsx>{`
        .label-medium {
          position: relative;
        }
      `}</style>
      {styles}
    </div>
  );
};

export default ScrollDownPrompt;
