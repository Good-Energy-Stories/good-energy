import css from 'styled-jsx/css';

function getStyles() {
  return css.resolve`
    div {
      display: inline-block;
      background-color: var(--white);
      min-width: 100%;
      position: relative;
      border-top: 4px solid var(--black);
      grid-column: 1/-1;
      display: grid;
      grid-template-columns: var(--grid-col);
      padding: 1.25rem 2.5rem;
      padding-bottom: 2.5rem;
      overflow: hidden;
    }
    @media only screen and (max-width: 768px) {
      div {
        padding: 0px;
        display: grid;

        grid-column-gap: 0;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ActiveIndex = ({ index, length }: { index: number; length: number }) => {
  return (
    <>
      <div className="row">
        <div className="label-medium">
          <span className="index">{index + 1}</span>
          <span className="length">{`/${length}`}</span>
        </div>
      </div>

      <style jsx>{`
        .row {
          grid-column: 1/2;
          overflow: hidden;
          margin-left: 1.25rem;
          margin-top: -1.25rem;
          margin-bottom: 1.25rem;
        }
        .length {
          color: var(--blueThree);
        }
        @media only screen and (max-width: 768px) {
          .row {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ActiveIndex;
