const Masthead = (props) => {
  return (
    <>
      <div>
        <img src="/header.png" alt="Good Energy Playbook Masthead" />
        <style jsx>{`
          div {
            display: block;
          }
          img {
            max-width: 100%;
            padding: 1.25rem;
            margin-top: 1.25rem;
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
