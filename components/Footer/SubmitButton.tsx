const SubmitButton = () => {
  return (
    <>
      <input type="submit" />
      <style jsx>{`
        input[type='submit'] {
          background-color: var(--blueFour);
          font-family: var(--flexa);
          font-size: 18px;
          font-style: normal;
          font-weight: 604;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: center;
          color: var(--black);
          border: 2px solid var(--black);
          display: inline-block;
          width: 150px;
          padding: 0.3125rem 1.25rem;
          text-transform: uppercase;
          float: right;
        }
      `}</style>
    </>
  );
};

export default SubmitButton;
