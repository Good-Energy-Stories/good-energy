import SubsectionLabel from './SubsectionLabel';

const DropdownSubsection = ({ title, contents }) => {
  return (
    <div className="container">
      <div className="playbook-toc-nav-link-small">{title}</div>
      {contents.map(({ title, slug }) => {
        return <SubsectionLabel key={title} title={title} slug={slug} />;
      })}
      <style jsx>{`
        .container {
          padding: 0.625rem 0.625rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0.625rem;
          border-bottom: 1px solid var(--greyBlue);
        }
        .playbook-toc-nav-link-small {
          color: var(--black);
          margin-bottom: 0.3125rem;
          padding-top: 3px;
        }
        .playbook-toc-nav-link-small:last-of-type {
          border: 0;
        }
        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default DropdownSubsection;
