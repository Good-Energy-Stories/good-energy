const Masthead = (props) => {
  return (
    <>
      <div>
        <img
          className="header"
          src="/header.png"
          alt="Good Energy Playbook Masthead"
        />
        <img
          className="subheader"
          src="/subheader.png"
          alt="Good Energy Playbook Masthead"
        />

        <style jsx>{`
          div {
            display: grid;
            grid-template-columns: var(--grid-col);
            padding: 1.25rem;
          }
          img {
            max-width: 100%;
            min-width: 100%;

            margin-top: 1.25rem;
          }
          .header {
            grid-column: span 3;
          }
          .subheader {
            grid-column: span 1;
            padding-left: 0.625rem;
          }

          @media only screen and (max-width: 768px) {
            div {
            }
            img {
              margin-top: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Masthead;
