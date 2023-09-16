const Copyright = () => {
  return (
    <>
      <div>©{new Date().getFullYear()} Good Energy</div>

      <style jsx>{`
        div {
          font-family: var(--flexa);
          font-size: 18px;
          font-style: normal;
          font-variation-settings: 'wght' 604, 'wdth' 50;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: right;
          color: var(--white);
          align-self: flex-end;
          margin-top: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default Copyright;
